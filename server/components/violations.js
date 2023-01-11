const router = require("express").Router()
const presentDrones = require("./fetchDrones")


let violationHistory = {}
const interval = !!process.env.REFREST_RATE ? Number(process.env.REFREST_RATE) : 2000

const updateViolations = async () => {
    const presentData = await presentDrones()
    const duplicates = []
    for(const i in presentData) {
        if(violationHistory.hasOwnProperty(i)) {
            violationHistory[i].time = presentData[i].time
            if(violationHistory[i].dist > presentData[i].dist) violationHistory[i].dist = presentData[i].dist
            duplicates.concat(i)
        }
    }
    for(const i of duplicates) {
        delete presentData[i]
    }
    violationHistory = {...violationHistory, ...presentData}

    for(const i in violationHistory) {
        if(violationHistory[i].time + 600000 < Date.now()) {
            delete violationHistory[i]
        }
    }
}

setInterval(updateViolations, interval)

router.get("/", (req, res) => {
    res.json(violationHistory)
})

module.exports = router