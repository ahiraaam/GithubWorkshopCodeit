const fs = require("fs");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GOOGLE_API_KEY,
  sensor: true
};

const geocoder = NodeGeocoder(options);

const getLocations = async function(addresses) {
  
  locations = [];

  for(var i = 0; i < addresses.length ; i++){
    const location = await geocoder.geocode(addresses[i]);
    console.log(location);
    locations.push(location[0])
  }
  return locations;

};

module.exports = {
  getLocations
};
