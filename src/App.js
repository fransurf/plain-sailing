// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Container from 'react-bootstrap'

// * IMPORTING COMPONENTS
import MapSearch from './components/MapSearch'
// import VesselInfo from './components/VesselInfo'

function App() {

  return (
    <main className='page-container'>
      <h1> ⚓️🚢 --- Plain Sailing --- 🚢⚓️ </h1>
      <section className='map-container'>
        <div className='map-box'>
          <div id='map'></div>
        </div>
        <div className='map-search'> 
          <MapSearch />
          {/* <VesselInfo /> */}
        </div>



      </section>

    </main>
  )
}

export default App;
