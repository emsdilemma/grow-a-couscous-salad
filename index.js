//------------vars------------
// define debug
const debugBar = document.getElementById("debugBar")
var paused = false
var pauseButtonPressed = false

var pressedI = false
var inventoryOpen = false

// init canvas
const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const overlay = document.getElementById("overlay")
var overlayUI = ""

// init keyboard
const keys = {}

//------------functions------------
function updateMovement() {
    if (keys.w && player.y > 0) player.y -= player.speed
    if (keys.s && player.y < canvas.height - player.width)
        player.y += player.speed
    if (keys.a && player.x > 0) player.x -= player.speed
    if (keys.d && player.x < canvas.width - player.width)
        player.x += player.speed
}

function frameLoop() {
    requestAnimationFrame(loop)
}

// input listeners
function pressedKey(event) {
    keys[event.key] = true
}
function unPressedKey(event) {
    keys[event.key] = false
}
window.addEventListener("keydown", pressedKey)
window.addEventListener("keyup", unPressedKey)

//------------main loop------------
function loop() {
    // clear overlay
    overlayUI = ""
    overlay.innerHTML = ""

    // debug
    //debugBar.textContent = JSON.stringify(places, null, 2)
    if (keys.p) {
        if (!pauseButtonPressed) {
            paused = !paused
            pauseButtonPressed = true
        }
    } else {
        pauseButtonPressed = false
    }

    // keypresses
    if (keys.i) {
        if (!pressedI) {
            inventoryOpen = !inventoryOpen
            pressedI = true
        }
    } else {
        pressedI = false
    }

    if (keys.b) {
        player.speed = 10
    }
    else{
        player.speed = 2
    }

    // inventory
    if (collided) inventoryOpen = false
    if (inventoryOpen) showInventory()

    // do things functions
    if (!paused) {
        // place places
        if (!placedPlaces) placePlaces()
        if (!dialogueOpened) updateMovement()

        // reset collision
        collided = false

        // collisions
        playerCollision()
    }
    // draw last
    drawScreen()
    overlay.innerHTML = overlayUI

    frameLoop()
}

//------------initial call------------
loop()
