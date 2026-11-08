//------------vars------------
// init player
const player = {
    x: 0,
    y: 0,
    width: 20,
    speed: 2,
    colour: "#ff0000",
    shape: "square",
}

var collided = false

var currentPlace = []
var currentFarmID = 0

//------------functions------------
function playerCollision() {
    for (let i = 0; i < places.length; i++) {
        currentPlace = places[i]
        if (
            player.x + player.width >= currentPlace.x &&
            player.x <= currentPlace.x + currentPlace.width &&
            player.y + player.width >= currentPlace.y &&
            player.y <= currentPlace.y + currentPlace.height
        ) {
            collided = true
            if (currentPlace.type == "store") {
                collidedWithStore()
                if (!storeOpened){
                    overlayUI += `
                    <div style="
                        display: block;
                        position: absolute;
                        left: ${player.x-50}px;
                        top: ${player.y-35}px;
                        color: white;
                    ">
                        <p>press e to open store</p>
                    </div>`
                }
                //debugBar.textcontext = `collided with store! (${currentPlace.colour})`
            } else if (currentPlace.type == "character") {
                collidedWithCharacter()
                if (!dialogueOpened){
                    overlayUI += `
                    <div style="
                        display: block;
                        position: absolute;
                        left: ${player.x-50}px;
                        top: ${player.y-35}px;
                        color: white;
                    ">
                        <p>press e to talk</p>
                    </div>`
                }
                //debugBar.textcontext = `collided with character! (${currentPlace.colour})`
            } else if (currentPlace.type == "farm") {
                currentFarmID = currentPlace.farmId
                collidedWithFarm()
            }
            return
        }
    }
}