const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

const debugBar = document.getElementById("debugBar")

const player = {
    x: 0,
    y: 0,
    width: 25,
    speed: 25,
    colour: "#ff0000",
    shape: "square",
}
const keys = {}

function updateMovement(){
    //debugBar.innerHTML = player.x + " " + player.y

    if (keys.w && player.y > 0) player.y -= player.speed
    if (keys.s && player.y < canvas.height - player.width) player.y += player.speed
    if (keys.a && player.x > 0) player.x -= player.speed
    if (keys.d && player.x < canvas.width - player.width) player.x += player.speed
}

function drawScreen(){
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw bg
    ctx.fillStyle = "#222222"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw player
    ctx.fillStyle = player.colour
    ctx.fillRect(player.x, player.y, player.width, player.width)
}

function frameLoop(){
    requestAnimationFrame(loop)
}

function loop(){
    updateMovement()
    drawScreen()

    setTimeout(frameLoop, 100)
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

// call loop
loop()