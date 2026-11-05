var collided = false

function playerCollision() {
    for (let i = 0; i < places.length; i++) {
        currentPlace = places[i]
        if (
            player.x + player.width >= currentPlace.x &&
            player.x <= currentPlace.x + currentPlace.width &&
            player.y + player.width >= currentPlace.y &&
            player.y <= currentPlace.y + currentPlace.height
        ) {
            if (currentPlace.type == "store") {
                collided = true
                collidedWithStore()
                debugBar.innerHTML = `collided with store! (${currentPlace.colour})`
            } else if (currentPlace.type == "character") {
                collided = true
                //collidedWithCharacter()
                debugBar.innerHTML = `collided with character! (${currentPlace.colour})`
            }
            return
        } else {
            overlay.innerHTML = ""
            debugBar.innerHTML = "waiting for collision..."
        }
    }
}