//------------vars------------
// define debug
const debugBar = document.getElementById("debugBar")

// init canvas
const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

// init keyboard
const keys = {}

// init player
const player = {
    x: 0,
    y: 0,
    width: 30,
    speed: 4,
    colour: "#ff0000",
    shape: "square",
}

// init places
const placesTypes = ["store", "character"]
const placesInteractions = ["storeGUI", "dialogue"]
const placesColours = ["#008800", "#1100ff"]

var places = []
var placedPlaces = false
var numPlaces = 0

// init GUI
const storeGUI = [
    {item: "apple", price: 0.86},
    {item: "orange", price: 3.5},
    {item: "banana", price: 2.1},
]

const characterGUI = [
    {author: ["emma", "2mma", "3mma", "4mma"]},
    {dialogue: [
        `List'ning their fear, I could not say “Amen,” When they did say “God bless us!”`,
        `But after all it's better to ask for the earth than to take it.`,
        `The Communist Party does not fear criticism because we are Marxists, 
        the truth is on our side, and the basic masses, the workers and peasants, 
        are on our side.`,
        `Consider it not so deeply.`,
    ]},
]

//------------do things------------

function updateMovement() {
    debugBar.innerHTML = player.x + " " + player.y

    if (keys.w && player.y > 0) player.y -= player.speed
    if (keys.s && player.y < canvas.height - player.width)
        player.y += player.speed
    if (keys.a && player.x > 0) player.x -= player.speed
    if (keys.d && player.x < canvas.width - player.width)
        player.x += player.speed
}

function drawScreen() {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw bg
    ctx.fillStyle = "#222222"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw all places
    for (let i = 0; i < places.length; i++) {
        currentPlace = places[i]
        ctx.fillStyle = currentPlace.colour
        ctx.fillRect(
            currentPlace.x,
            currentPlace.y,
            currentPlace.width,
            currentPlace.height
        )
    }

    // draw player
    ctx.fillStyle = player.colour
    ctx.fillRect(player.x, player.y, player.width, player.width)
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

//------------run functions------------
function loop() {
    // do things functions
    updateMovement()
    if (!placedPlaces) placePlaces()
    playerCollision()

    // draw last
    drawScreen()

    if (keys.g) setTimeout(frameLoop, 50000)
        else frameLoop()
    // for blocky style
    // frameLoop()
}

//------------initial call------------
loop()
