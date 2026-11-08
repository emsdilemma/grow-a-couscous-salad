//------------vars------------
var planted = false
var inFarm = false

//------------functions------------
function collidedWithFarm() {
    inFarm = true
    if (keys.e) {
        if (!planted) {
            planted = true
            currentPlace.colour = "#a2ff63"
        }
    }
    else {
        planted = false
    }
}
