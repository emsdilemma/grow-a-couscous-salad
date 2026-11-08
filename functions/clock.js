//------------vars------------
var minute = 0
var formattedMinute = "00"

var hour = 0
var day = 0

// farm vars
const growStageColours = ["#a2ff63", "#00bbff", "#ffbb00", "#ff00ff", "#ffff00"]

//------------functions------------
function countTime() {
    if (minute < 60) {
        minute += 1
    }
    if (minute == 60) {
        minute = 0
        hour += 1
    }
    if (hour == 24) {
        hour = 0
        day += 1
    }
    if (minute == 0) {
        formattedMinute = "00"
    } else if (minute < 10) {
        formattedMinute = "0" + minute
    } else {
        formattedMinute = minute
    }

    baseTime = day * 24 * 60 + hour * 60 + minute
}

function growFarms() {
    for (let i = 0; i < places.length; i++) {
        const currentFarm = places[i]

        if (
            currentFarm.type === "farm" &&
            Array.isArray(currentFarm.plantedTime)
        ) {
            const basePlantedTime =
                currentFarm.plantedTime[0] * 24 * 60 +
                currentFarm.plantedTime[1] * 60 +
                currentFarm.plantedTime[2]

            const deltaPlantedTime = baseTime - basePlantedTime
            if (deltaPlantedTime <= 5) {
                currentFarm.growStage = 0
            } else if (deltaPlantedTime <= 15) {
                currentFarm.growStage = 1
            } else if (deltaPlantedTime <= 30) {
                currentFarm.growStage = 2
            } else if (deltaPlantedTime <= 50) {
                currentFarm.growStage = 3
            } else {
                currentFarm.growStage = 4
            }

            currentFarm.colour = growStageColours[currentFarm.growStage]
        }
    }
}
