import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'

// import { token, API_URL } from '../helpers/auth.js'

// * Vessels data transformed to geojson/mapbox obj and ordered by vessesl name
import vesselsGeoJSONObj from '../helpers/DataToGeoJson'
import historyGeoJSONObj from '../helpers/HistoryToGeoJson'
import vesselInfo from '../data/Vessel0info'

// * Mapbox interactive functions
// import { flyToVessel, recentreMap, displayPopUp } from '../helpers/MapFunctions.js'

import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnN1cmYiLCJhIjoiY2wzOGxjZjNhMDB6bjNsbzE2NTN0MWhlMCJ9.fe6K99Y7XfdIZ2sd1xpAJA'

const MapVessels = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-3.0370);
  const [lat, setLat] = useState(53.8167);
  const [zoom, setZoom] = useState(4.3);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: true,
    });
    map.current.addControl(new mapboxgl.NavigationControl())
  });

  // * Map layers
  useEffect(() => {
    if (!map.current) return
    // * All vessel locations layer
    map.current.on('load', () => {
      map.current.addSource('places', {
        type: 'geojson',
        data: vesselsGeoJSONObj
      })

      // * History markers layer
      map.current.addSource('history', {
        type: 'geojson',
        data: historyGeoJSONObj
      })

      vesselsList(vesselsGeoJSONObj)
      addMarker()
    })
  })


  // * CUSTOM MARKERS FOR ALL VESSEL LOCATIONS
  const addMarker = () => {
    for (const marker of vesselsGeoJSONObj.features) {
      // Create a div with marker-mmsi id and marker class
      const el = document.createElement('div')
      el.id = `marker-${marker.properties.mmsi}`
      el.className = 'marker'

      // * Adds specific 'type' class for individual marker img
      for (const info of vesselInfo) {
        if (marker.properties.name === info.name) {
          el.className = `marker marker-${info.type.replace(/\s/g, '')}`
        }
      }

      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current)

      // Click event => Fly to vessel, open display/remove existing & highlight in sidebar
      el.addEventListener('click', (e) => {
        console.log('⭐️ clicked')
        flyToVessel(marker)
        displayPopUp(marker)

        // Add/remove 'active' class
        const activeItem = document.getElementsByClassName('active')
        e.current.stopPropagation()
        if (activeItem[0]) activeItem[0].classList.remove('active')
        const listing = document.getElementById(`listing-${marker.properties.mmsi}`)
        listing.classList.add('active')
      })
    }
  }

  // * CUSTOM MARKERS FOR VESSEL HISTORY
  const addHistory = () => {
    for (const historyMarker of historyGeoJSONObj.features) {
      const el2 = document.createElement('div')
      el2.className = `history-marker`
      el2.id = `history-${historyMarker.mmsi}`

      new mapboxgl.Marker(el2, { offset: [0, -23] })
        .setLngLat(historyMarker.geometry.coordinates)
        .addTo(map.current)
    }
  }

  // * ADD VESSEL INFO TO VESSEL LISTINGS SIDEBAR & HANDLES CLICK
  const vesselsList = (vesselsGeoJSONObj) => {
    for (const vessel of vesselsGeoJSONObj.features) {
      // * Add new listing div for each vessel
      const listings = document.getElementById('listings')
      const listing = listings.appendChild(document.createElement('div'))

      // * Assign mmsi id & item class to listing
      listing.id = `listing-${vessel.properties.mmsi}`
      listing.className = 'item'

      // * Add a link to the vessel
      const link = listing.appendChild(document.createElement('a'))
      link.href = '#'
      link.className = 'title'
      link.id = `link-${vessel.properties.mmsi}`
      link.innerHTML = `Vessel No.${vessel.properties.name.match(/\d+/)[0]}`

      // * Function to get date info
      const longDate = vessel.properties.timestamp
      const date = new Date(longDate)
      const useableDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

      // * ADD ADDITIONAL DETAILS
      const details = listing.appendChild(document.createElement('div'))
      for (const info of vesselInfo) {
        if (vessel.properties.name === info.name) {
          const typeFlag = details.appendChild(document.createElement('p'))
          typeFlag.innerHTML = `${info.type} | ${info.flag}`
          typeFlag.classList.add('vessel-details', 'type', 'flag')
        }
      }
      const location = details.appendChild(document.createElement('p'))
      location.innerHTML = `Last recorded at ${vessel.properties.lat.toFixed(2)}°N, ${vessel.properties.long.toFixed(2)}°E on ${useableDate}`
      location.classList.add('vessel-details', 'location')

      // Handle click on link
      link.addEventListener('click', function () {
        for (const vessel of vesselsGeoJSONObj.features) {
          // if (this.item === undefined) return
          if (this.id === `link-${vessel.properties.mmsi}`) {
            flyToVessel(vessel)
            displayPopUp(vessel)
          }
        }
        const activeItem = document.getElementsByClassName('active')
        if (activeItem[0]) {
          activeItem[0].classList.remove('active')
        }
        this.parentNode.classList.add('active')
      })
    }
    recentreMap()
  }

  // * INTERACTIVE FUNCTIONS
  // Centre on clicked feature
  const flyToVessel = (currentFeature) => {
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 7
    })
  }

  // Recentre screen on Title click
  const recentreMap = () => {
    const vesselsTitle = document.getElementById('map-centre')
    vesselsTitle.addEventListener('click', () => {
      map.current.flyTo({
        center: [-3.0370, 53.8167],
        zoom: 5,
      })
      // Remove existing popups
      const popUps = document.getElementsByClassName('mapboxgl-popup')
      if (popUps[0]) popUps[0].remove()
    })
  }

  // Display popup & remove existing popup
  const displayPopUp = (currentFeature) => {
    const popUps = document.getElementsByClassName('mapboxgl-popup')
    if (popUps[0]) popUps[0].remove()

    // * Add popup details
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3>Vessel No.${currentFeature.properties.name.match(/\d+/)[0]}</h3>
      <h4><b>Coordinates:</b> ${currentFeature.properties.lat.toFixed(2)}°N, ${currentFeature.properties.long.toFixed(2)}°E</h4>
      <h4><b>Travelling:</b> ${currentFeature.properties.speed} knots, heading ${currentFeature.properties.heading}°N</h4>
      <h4 id=marker-${currentFeature.properties.mmsi}><a href='#' id='show-history'>See history</a></h4>`)
      .addTo(map.current)

    // Close popup on X-click & recentre
    const closeButtons = document.getElementsByClassName('mapboxgl-popup-close-button')
    for (const button of closeButtons) {
      button.addEventListener('click', (e) => {
        map.current.flyTo({
          center: [-3.0370, 53.8167],
          zoom: 5,
        })
        removeHistory()
        addMarker()
      })
    }

    displayHistory()
  }

  // * Display History Markers onClick
  const displayHistory = () => {
    const showHistory = document.getElementById('show-history')
    // console.log('showHistory --->', showHistory.parentNode.id)
    showHistory.addEventListener('click', (e) => {
      console.log('⭐️ clicked')
      map.current.flyTo({
        center: [-3.0370, 53.8167],
        zoom: 5,
      })

      // Remove Vessel markers EXCEPT currentVessel
      const currentMarkers = document.getElementsByClassName('marker')
      // console.log('currentMarkers--->', currentMarkers)
      if(currentMarkers!==null) {
        for (var i = currentMarkers.length - 1; i >= 0; i --){
          // console.log('marker --->', currentMarkers[i])
          if (currentMarkers[i].id !== showHistory.parentNode.id)
          currentMarkers[i].remove()
        }
      }

      addHistory()
    })
  }

// * Remove history markers
  const removeHistory = () => {
    const historyMarkers = document.getElementsByClassName('history-marker')
    if(historyMarkers!==null) {
      for (var i = historyMarkers.length - 1; i >= 0; i --) historyMarkers[i].remove()
    }
  }



  return (
    <Container id="mapbox-container" className='map-search-content'>
      {/* Map container */}
      <div ref={mapContainer} id="map" className="map-container"></div>
      {/* Listings sidebar */}
      <div className='sidebar'>
        <div className='heading'>
          <h2><a href="/" id="map-centre">Your vessels</a></h2>
        </div>
        <div id='listings' className='listings'></div>
      </div>
    </Container>
  )
}

export default MapVessels