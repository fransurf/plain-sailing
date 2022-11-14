import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryFlags = () => {

  const [ flags, setFlags ] = useState([])
  const [ errors, setErrors ] = useState(false)

  useEffect(() => {
    const getFlags = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v2/all')
        setFlags(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getFlags()
  }, [])

  return (
    flags.map(country => {
      const { flags, name } = country
      console.log('flag from api', flags.png)
      return (
        <img src={flags.png} alt={`Flag of ${name}`} />
    )})
  )
}

export default CountryFlags