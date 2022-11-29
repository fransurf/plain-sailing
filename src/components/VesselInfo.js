import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'


const VesselInfo = () => {

  const [ vessels, setVessels ] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getVessels = async () => {
      try {
        const { data } = await axios.get('https://zruqk52qub.execute-api.us-east-1.amazonaws.com/v3/vessels/vessel_0/history/',
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Credentials": true,
              "Content-Type": "application/json",
              "x-api-key": "OdYTEpiTcrg5syMlp5Fz5J7FEjYxxF1cHXXdFF30",
            },
          }
        )
        console.log('🏆 Got the vessels data???', data)
        setVessels(data)

      } catch (error) {
        console.log('🥺 error getting your vessel data 🥺', error)
        setErrors(true)
      }
    }
    getVessels()
  }, [])

  console.log('vessels ->', vessels)

  return (
    <Container>
      <h4>Vessel info</h4>
    </Container>
  )
}

export default VesselInfo