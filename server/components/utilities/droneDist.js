const dimension = 500000
const radius = 100000
const center = dimension / 2

const droneDist = (x, y) => {
    const dist = Math.sqrt( Math.pow((x-center), 2) + Math.pow((y-center), 2) )
    return {
        dist,
        isViolation: dist <= radius
    }
}

module.exports = droneDist