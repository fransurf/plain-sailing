// import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

// import vesselsGeoJSONObj from '../helpers/DataToGeoJson'

// mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnN1cmYiLCJhIjoiY2wzOGxjZjNhMDB6bjNsbzE2NTN0MWhlMCJ9.fe6K99Y7XfdIZ2sd1xpAJA'

// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/outdoors-v11',
//   // Change centre to over sea??
//   center: [-3.0370, 53.8167],
//   zoom: 5,
//   scrollZoom: true,
// })

// map.addControl(new mapboxgl.NavigationControl())


  // * Function to add custom markers to map at vessel locations
  // export const addMarker = () => {
  //   for (const marker of vesselsGeoJSONObj.features) {
  //     // Create a div with marker-mmsi id and marker class
  //     const el = document.createElement('div')
  //     el.id = `marker-${marker.properties.mmsi}`
  //     el.className = 'marker'

  //     // * Adds specific 'type' class for individual marker img
  //     for (const info of vesselInfo) {
  //       if (marker.properties.name === info.name) {
  //         el.className = `marker marker-${info.type.replace(/\s/g, '')}`
  //       }
  //     }

  //     new mapboxgl.Marker(el, { offset: [0, -23] })
  //       .setLngLat(marker.geometry.coordinates)
  //       .addTo(map.current)

  //     // Click event => Fly to vessel, open display/remove existing & highlight in sidebar
  //     el.addEventListener('click', (e) => {
  //       flyToVessel(marker)
  //       displayPopUp(marker)

  //       // Add/remove 'active' class
  //       const activeItem = document.getElementsByClassName('active')
  //       e.current.stopPropagation()
  //       if (activeItem[0]) activeItem[0].classList.remove('active')
  //       const listing = document.getElementById(`listing-${marker.properties.mmsi}`)
  //       listing.classList.add('active')
  //     })
  //   }
  // }


  // // * Adds vessel info to listings list & handles click
  // const vesselsList = (vesselsGeoJSONObj) => {
  //   for (const vessel of vesselsGeoJSONObj.features) {
  //     // * Add new listing div for each vessel
  //     const listings = document.getElementById('listings')
  //     const listing = listings.appendChild(document.createElement('div'))

  //     // * Assign mmsi id & item class to listing
  //     listing.id = `listing-${vessel.properties.mmsi}`
  //     // console.log('listing id --->', listing.id)
  //     listing.className = 'item'

  //     // * Add a link to the vessel??
  //     const link = listing.appendChild(document.createElement('a'))
  //     link.href = '#'
  //     link.className = 'title'
  //     link.id = `link-${vessel.properties.mmsi}`

  //     const nicerName = `Vessel No.${vessel.properties.name.match(/\d+/)[0]}`
  //     link.innerHTML = `${nicerName}`

  //     // * Function to get date info
  //     const longDate = vessel.properties.timestamp
  //     const date = new Date(longDate)
  //     const useableDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  //     // * ADD ADDITIONAL DETAILS
  //     const details = listing.appendChild(document.createElement('div'))
  //     for (const info of vesselInfo) {
  //       if (vessel.properties.name === info.name) {
  //         const typeFlag = details.appendChild(document.createElement('p'))
  //         typeFlag.innerHTML = `${info.type} | ${info.flag}`
  //         typeFlag.classList.add('vessel-details', 'type', 'flag')
  //       }
  //     }
  //     const location = details.appendChild(document.createElement('p'))
  //     location.innerHTML = `Last recorded at ${vessel.properties.lat.toFixed(2)}°N, ${vessel.properties.long.toFixed(2)}°E on ${useableDate}`
  //     location.classList.add('vessel-details', 'location')

  //     // Handle click on link
  //     link.addEventListener('click', function () {
  //       for (const vessel of vesselsGeoJSONObj.features) {
  //         if (this.id === `link-${vessel.properties.mmsi}`) {
  //           flyToVessel(vessel)
  //           displayPopUp(vessel)
  //         }
  //       }
  //       const activeItem = document.getElementsByClassName('active')
  //       if (activeItem[0]) {
  //         activeItem[0].classList.remove('active')
  //       }
  //       this.parentNode.classList.add('active')
  //     })
  //   }
  //   // Recentre map on listings.title click
  //   recentreMap()
  // }


// * INTERACTIVE FUNCTIONS
// Centre on clicked feature
// export const flyToVessel = (currentFeature) => {
//   map.flyTo({
//     center: currentFeature.geometry.coordinates,
//     zoom: 7
//   })
// }

// // Recentre screen on Title click
// export const recentreMap = () => {
//   const vesselsTitle = document.getElementById('map-centre')
//   vesselsTitle.addEventListener('click', () => {
//     map.flyTo({
//       center: [-3.0370, 53.8167],
//       zoom: 5,
//     })
//     // Remove existing popups
//     const popUps = document.getElementsByClassName('mapboxgl-popup')
//     if (popUps[0]) popUps[0].remove()
//   })
// }

// // Display popup & remove existing popup
// export const displayPopUp = (currentFeature) => {
//   const popUps = document.getElementsByClassName('mapboxgl-popup')
//   if (popUps[0]) popUps[0].remove()

//   const popup = new mapboxgl.Popup({ closeOnClick: false })
//     .setLngLat(currentFeature.geometry.coordinates)
//     .setHTML(`<h3>Vessel No.${currentFeature.properties.name.match(/\d+/)[0]}</h3><h4>Coordinates (${currentFeature.properties.lat.toFixed(2)}, ${currentFeature.properties.long.toFixed(2)})</h4>`)
//     .addTo(map)
// }