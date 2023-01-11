const violatorConstructor = require("./utilities/violationConstructor")
const droneDist = require("./utilities/droneDist")
const axios = require("axios")


const fetchViolations = async (drones) => {
    const violationsObj = {}
    for (const drone of drones) {
        const calc = droneDist(drone.positionX._text, drone.positionY._text)
        if(calc.isViolation) {
            await axios
            .get("https://assignments.reaktor.com/birdnest/pilots/".concat(drone.serialNumber._text))
            .then( response => {
                violationsObj[drone.serialNumber._text] = violatorConstructor(response.data, calc.dist)
            })
            .catch( error => {
                console.log(error)
            })
        }
    }

    return violationsObj;
}

module.exports = fetchViolations
