import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'

const VesselInfo = () => {

  const [ vessel, setVessel ] = useState([])


  return (
    <Container className='map-search-content'>
      <h2>Vessel Info</h2>
    </Container>
  )
}

export default VesselInfo