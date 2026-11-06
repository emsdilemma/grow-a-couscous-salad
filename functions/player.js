//------------vars------------
// init player
const player = {
    x: 0,
    y: 0,
    width: 30,
    speed: 2,
    colour: "#ff0000",
    shape: "square",
}

var collided = false
var playerInventory = []

//------------functions------------
function playerCollision() {
    for (let i = 0; i < places.length; i++) {
        let currentPlace = places[i]
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
                        <p>press e to interact</p>
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
                        <p>press e to interact</p>
                    </div>`
                }
                //debugBar.textcontext = `collided with character! (${currentPlace.colour})`
            }
            return
        }
    }
}

function addToPlayerInventory(itemToAdd, quantityToAdd) {
    const targetItem = playerInventory.find(product => product.item == itemToAdd)
    if (targetItem) {
        targetItem.quantity += quantityToAdd
    }
    else {
        playerInventory.push(
            {item: itemToAdd, quantity: quantityToAdd}
        )
    }
}