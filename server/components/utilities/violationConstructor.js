const violationConstructor = (pilot, dist) => {
    return {
        dist,
        time: Date.now(), 
        firstName: pilot.firstName,
        lastName: pilot.lastName,
        email: pilot.email,
        phoneNumber: pilot.phoneNumber

    }
}

module.exports = violationConstructor