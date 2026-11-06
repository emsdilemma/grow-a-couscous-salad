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
}