//------------vars------------
var baseTime = 0

//------------functions------------
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


    // draw clock
    ctx.beginPath()
    ctx.arc(35, 35, 30, 0, 2*Math.PI)
    ctx.strokeStyle = "white"
    ctx.stroke()

    // draw hand
    clockHandAngle = baseTime % 360 - 90

    ctx.save()
    ctx.translate(35, 35)
    ctx.rotate(clockHandAngle * Math.PI / 180)
    ctx.fillStyle = "#ffff48"
    ctx.fillRect(-3, -2.5, 30, 5)
    ctx.restore()

    // draw pin
    ctx.beginPath()
    ctx.arc(35, 35, 2, 0, 2*Math.PI)
    ctx.fillStyle = "black"
    ctx.fill()
}