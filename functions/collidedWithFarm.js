//------------vars------------
var planted = false
var inFarm = false

//------------functions------------
function collidedWithFarm() {
    inFarm = true
    if (keys.e) {
        if (!planted && currentPlace.plantedTime === null) {
            planted = true

            currentPlace.plantedTime = [day, hour, minute]
            currentPlace.growStage = 0
            currentPlace.colour = growStageColours[currentPlace.growStage]
        }
    }
    else {
        planted = false
    }
}
