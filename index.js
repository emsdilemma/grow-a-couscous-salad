const debugBar = document.getElementById("debugBar")

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const keys = {}

const player = {
    x: 0,
    y: 0,
    width: 30,
    speed: 4,
    colour: "#ff0000",
    shape: "square",
}

const placesTypes = ["store", "character"]
const placesInteractions = ["storeGUI", "dialogue"]
const placesColours = ["#008800", "#1100ff"]

var stores = []
var characters = []

var placedPlaces = false

var numStores = 0
var numCharacters = 0

//------------vars------------

function updateMovement() {
    debugBar.innerHTML = player.x + " " + player.y

    if (keys.w && player.y > 0) player.y -= player.speed
    if (keys.s && player.y < canvas.height - player.width)
        player.y += player.speed
    if (keys.a && player.x > 0) player.x -= player.speed
    if (keys.d && player.x < canvas.width - player.width)
        player.x += player.speed
}

function placePlaces() {
    i = 0
    while (i <= 2) {
        var randPlaceTypeIndex =
            Math.floor(Math.random() * placesTypes.length)

        var pickedPlaceType = placesTypes[randPlaceTypeIndex]

        randX = Math.floor(Math.random() * 500) + 1
        randY = Math.floor(Math.random() * 500) + 1
        pickedPlaceColour = placesColours[randPlaceTypeIndex]
        var pickedPlaceInteraction = placesInteractions[randPlaceTypeIndex]

        if (pickedPlaceType == "store") {
            numStores += 1
            stores.push({
                x: randX,
                y: randY,
                width: 30,
                height: 10,
                colour: pickedPlaceColour,
                type: pickedPlaceType,
                interaction: pickedPlaceInteraction,
            })
        } else if (pickedPlaceType == "character") {
            numCharacters += 1
            characters.push({
                x: randX,
                y: randY,
                width: 30,
                height: 10,
                colour: pickedPlaceColour,
                type: pickedPlaceType,
                interaction: pickedPlaceInteraction,
            })
        }
        i++
    }

    placedPlaces = true
}

function drawScreen() {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw bg
    ctx.fillStyle = "#222222"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw player
    ctx.fillStyle = player.colour
    ctx.fillRect(player.x, player.y, player.width, player.width)

    // draw stores
    for (let i = 0; i < stores.length; i++) {
        currentStore = stores[i]
        ctx.fillStyle = currentStore.colour
        ctx.fillRect(
            currentStore.x,
            currentStore.y,
            currentStore.width,
            currentStore.height
        )
    }

    // draw chacracters
    for (let i = 0; i < characters.length; i++) {
        currentCharacter = characters[i]
        ctx.fillStyle = currentCharacter.colour
        ctx.fillRect(
            currentCharacter.x,
            currentCharacter.y,
            currentCharacter.width,
            currentCharacter.height
        )
    }
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

// run funcs
function loop() {
    // do things functions
    updateMovement()
    if (!placedPlaces) placePlaces()

    // draw last
    drawScreen()

    // setTimeout(frameLoop, 100)
    // for blocky style
    frameLoop()
}

// initial call for loop
loop()
