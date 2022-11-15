import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

// * Vessels data transformed to geojson/mapbox obj and ordered by vessesl name
import vesselsGeoJSONObj from '../helpers/DataToGeoJson'
import vesselInfo from '../data/Vessel0info'
import vesselHistory from '../data/Vessel0history'



const VesselInfo = () => {

  const [ vessel, setVessel ] = useState([])

  console.log('Heres the info for Vessel[0] -->', vesselInfo)
  // console.log('Heres what Vessel[0] has been up to -->', vesselHistory)

  if (vesselInfo.mmsi)


  return (
    <Container className='map-search-content'>
      <h2>Vessel Info</h2>
    </Container>
  )
}

export default VesselInfo