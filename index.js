//------------vars------------
// define debug
const debugBar = document.getElementById("debugBar")
var paused = false
var pauseButtonPressed = false
var enableDebugVar = false

var pressedI = false
var inventoryOpen = false

// init canvas
const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const overlay = document.getElementById("overlay")
var overlayUI = ""
var lastOverlayUI = null

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
    keys[event.key.toLowerCase()] = true
}
function unPressedKey(event) {
    keys[event.key.toLowerCase()] = false
}
window.addEventListener("keydown", pressedKey)
window.addEventListener("keyup", unPressedKey)

// enable debug using function
function enableDebug() {
    enableDebugVar = true
}

//------------main loop------------
function loop() {
    //------------clear overlay------------
    overlayUI = ""

    //------------debug------------
    if (enableDebugVar) {
        document.getElementById("overlayTestingButton").innerHTML = `
        <button style="width: 150px; height: 50px; position: absolute; left: 8px;" title="overlay testing">
            overlay testing (tab + enter)
        </button>`

        //debugBar.textContent = JSON.stringify(places, null, 2)
        debugBar.textContent = JSON.stringify(playerInventory, null, 2)
        //debugBar.textContent = `x,y: ${player.x}, ${player.y}`

        if (keys.p) {
            if (!pauseButtonPressed) {
                paused = !paused
                pauseButtonPressed = true
            }
        } else {
            pauseButtonPressed = false
        }
    }

    //------------keypressed------------
    if (keys.i) {
        if (!pressedI) {
            inventoryOpen = !inventoryOpen
            pressedI = true
        }
    } else {
        pressedI = false
    }

    if (keys.shift) {
        player.speed = 10
    } else {
        player.speed = 2
    }

    if (keys.f9) enableDebugVar = true

    //------------do things functions------------
    inFarm = false

    if (!paused) {
        // place places
        if (!placedPlaces) placePlaces()

        // only if any interface is not open
        if (!dialogueOpened && !storeOpened) updateMovement()

        // collisions
        // reset collision
        collided = false
        playerCollision()
    }

    // render outside of collision detector
    if (storeOpened) renderStore()
    if (dialogueOpened) renderCharacterDialogue()

    //------------inventory------------
    if (collided && !inFarm) inventoryOpen = false
    if (inventoryOpen) showInventory()

    //------------lastly, draw------------
    drawScreen()
    if (overlayUI !== lastOverlayUI) {
        overlay.innerHTML = overlayUI
        lastOverlayUI = overlayUI
    }

    //------------loopy loop------------
    frameLoop()
}

//------------initial call------------
loop()
