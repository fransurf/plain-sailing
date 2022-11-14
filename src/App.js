// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Container from 'react-bootstrap'


// * IMPORTING COMPONENTS
import NavBar from './components/NavBar'
import MapVessels from './components/MapVessels'

// import VesselInfo from './components/VesselInfo'

function App() {

  return (
    <main className='page-container'>
      <NavBar />
      <h1 className='page-title'> ⚓️🚢 --- Plain Sailing --- 🚢⚓️ </h1>
      <MapVessels />
    </main>
  )
}

export default App;
