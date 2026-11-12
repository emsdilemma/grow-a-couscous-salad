//------------vars------------
var minute = 0
var formattedMinute = "00"

var hour = 0
var day = 0

var baseTime = 0

// farm
const growthAlphas = ["22", "44", "88", "cc", "ff"]
var thisFarmColour = ""
var thisFarmColourAlpha = ""

// clock tower
var readClockTower = false

// store
var storeEmptyShelves = 0
var emptyIndex = null

//------------functions------------
function countTime() {
    if (minute < 60) {
        minute += 1
    }
    if (minute === 60) {
        minute = 0
        hour += 1
    }
    if (hour === 24) {
        hour = 0
        day += 1
    }
    if (minute === 0) {
        formattedMinute = "00"
    } else if (minute < 10) {
        formattedMinute = "0" + minute
    } else {
        formattedMinute = minute
    }

    baseTime = day * 24 * 60 + hour * 60 + minute
}

function collidedWithClockTower() {
    if (keys.e && currentPlace.type === "clockTower") {
        readClockTower = true
    } else {
        readClockTower = false
    }
}
