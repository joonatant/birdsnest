const axios = require("axios")
const xmljs = require("xml-js")
const pilots = require("./fetchViolations")

const droneURL = "http://assignments.reaktor.com/birdnest/drones"


const fetchDrones = async () => {
    try {
        const rawData = await axios.get(droneURL).then( response => response.data)
        const guardDroneObj = xmljs.xml2js(rawData, {compact: true})
        if(!process.env.REFRESH_RATE) {
            process.env.REFRESH_RATE = guardDroneObj.report.deviceInformation.updateIntervalMs._text
        }
        const drones = guardDroneObj.report.capture.drone 
        const violations = await pilots(drones)
        return violations

    } catch (err) {
        console.log(err)
    }
} 



module.exports = fetchDrones