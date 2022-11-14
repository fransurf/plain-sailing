import vessels from '../data/VesselData.js'

// * Function to create GeoJSON with 'coordinates' KVP & order vessels 0-9
const vesselsGeoJSON = vessels.map(ship => {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ship.long, ship.lat],
    },
    properties: { ...ship },
  }
}).sort((a, b) => (a.properties.name > b.properties.name ? 1 : -1))

// * Function to create mapbox data structure
const vesselsGeoJSONObj = {
  "type": "FeatureCollection",
  "features": [...vesselsGeoJSON]
}

// console.log('vesselsGeoJSON --->', vesselsGeoJSON)
// console.log('vesselsGeoJSONObj --->', vesselsGeoJSONObj)

export default vesselsGeoJSONObj