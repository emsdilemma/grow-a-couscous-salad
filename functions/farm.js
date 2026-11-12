//------------vars------------
var planted = false
var inFarm = false

var cropColourIndex = ""
var crop = ""

const cropColours = [
    { crop: "potatoes", colour: "#ffff55" },
    { crop: "pepper seeds", colour: "#ff0000" },
    { crop: "persimmon seeds", colour: "#0015ff" },
    { crop: "carrots", colour: "#00ff00" },
]

var heldItemName = ""

//------------functions------------
function collidedWithFarm() {
    inFarm = true
    if (keys.e) {
        if (
            !planted &&
            currentPlace.plantedTime === null &&
            itemHeldIndex !== 0
        ) {
            planted = true

            currentPlace.plantedTime = [day, hour, minute]
            currentPlace.growStage = 0

            heldItemName = playerInventory[itemHeldIndex].item
            crop = cropColours.find((item) => item.crop === heldItemName)

            if (crop) currentPlace.colour = crop.colour + "22"

            // remove item if quantity === 0
            if (playerInventory[itemHeldIndex]) {
                if (
                    playerInventory[itemHeldIndex].quantity === 1 &&
                    playerInventory[itemHeldIndex].item != "hand"
                ) {
                    playerInventory.splice(itemHeldIndex, 1)
                    itemHeldIndex --
                } else if (
                    playerInventory[itemHeldIndex].quantity >= 1 &&
                    planted
                ) {
                    playerInventory[itemHeldIndex].quantity =
                        playerInventory[itemHeldIndex].quantity - 1
                }
            }
        }
    } else {
        planted = false
    }
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

            //console.log(currentFarm.growTimeVariance)
            const deltaPlantedTime = baseTime - basePlantedTime
            if (
                deltaPlantedTime === 5 + currentFarm.growTimeVariance[0] &&
                !currentFarm.passed0
            ) {
                currentFarm.growStage = 0
                currentFarm.passedStages[0] = true
            } else if (
                deltaPlantedTime === 20 + currentFarm.growTimeVariance[1] &&
                !currentFarm.passed1
            ) {
                currentFarm.growStage = 1
                currentFarm.passedStages[1] = true
            } else if (
                deltaPlantedTime === 35 + currentFarm.growTimeVariance[2] &&
                !currentFarm.passed2
            ) {
                currentFarm.growStage = 2
                currentFarm.passedStages[2] = true
            } else if (
                deltaPlantedTime === 50 + currentFarm.growTimeVariance[3] &&
                !currentFarm.passed3
            ) {
                currentFarm.growStage = 3
                currentFarm.passedStages[3] = true
            } else if (
                deltaPlantedTime === 100 + currentFarm.growTimeVariance[4] &&
                !currentFarm.passed4
            ) {
                currentFarm.growStage = 4
                currentFarm.passedStages[4] = true
            }
            //console.log(currentFarm.growStage)

            thisFarmColour = currentFarm.colour

            thisFarmColourAlpha = growthAlphas[currentFarm.growStage]
            thisFarmColour = thisFarmColour.slice(0, 7) + thisFarmColourAlpha

            currentFarm.colour = thisFarmColour
        }
    }
}
