import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'

import { token, API_URL } from '../helpers/auth.js'
// axios.defaults.withCredentials = true


const MapSearch = () => {

  const [vessels, setVessels] = useState([])
  const [errors, setErrors] = useState([false])

  useEffect(() => {
    const getVessels = async () => {

      try {
        // console.log('token inside trycatch -->', token)
        const { data } = await axios.get(`${API_URL}/vessels/positions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('vessels data -->', data)
        setVessels(data)
        
      } catch (error) {
        console.log('🚨 error getting vessels --->', error)
        setErrors(true)
      }
    }
    getVessels()
  }, [])

  return (
    <Container className='map-search-content'>
      <h2>Search & Filter</h2>
    </Container>
  )
}

export default MapSearch