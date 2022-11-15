import vesselHistory from '../data/Vessel0history.js'

const vesselsHistoryGeoJSON = vesselHistory.map(ship => {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [ship.long, ship.lat],
    },
    properties: { ...ship },
  }
})

// * Data to Mapbox structure
const historyGeoJSONObj = {
  "type": "FeatureCollection",
  "features": [...vesselsHistoryGeoJSON]
}

// console.log('vesselsHistoryGeoJSON --->', vesselsHistoryGeoJSON)

export default historyGeoJSONObj