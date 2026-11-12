//------------vars------------
var stockedNotif = false

//------------functions------------
function drawScreen() {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw bg
    ctx.fillStyle = "#222222"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw places BEHIND player
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

    let store = places.find((place) => place.type === "store")
    
    if (storeStocked && !stockedNotif) {
        stockedNotif = true
    }
    if (stockedNotif && storeOpened) {
        stockedNotif = false
    }
    
    if (stockedNotif) {
        ctx.fillStyle = "#cc00bb"
        ctx.fillRect(
            store.x + store.width - 20,
            store.y + store.height - 20,
            20,
            20
        )
    }

    // draw player
    ctx.fillStyle = player.colour
    ctx.fillRect(player.x, player.y, player.width, player.width)

    // draw places IN FRONT of player

    if (readClockTower && collided) {
        let clockCentreX = 250
        let clockCentreY = 250

        // draw clock
        ctx.beginPath()
        ctx.arc(clockCentreX, clockCentreY, 200, 0, 2 * Math.PI)
        ctx.strokeStyle = "white"
        ctx.lineWidth = 10
        ctx.stroke()
        ctx.fillStyle = "#414f4f"
        ctx.fill()

        // draw notches
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"
        ctx.beginPath()

        // U and R
        ctx.moveTo(250, 50)
        ctx.lineTo(250, 100)
        ctx.moveTo(450, 250)
        ctx.lineTo(400, 250)

        // D and L
        ctx.moveTo(250, 450)
        ctx.lineTo(250, 400)
        ctx.moveTo(50, 250)
        ctx.lineTo(100, 250)

        ctx.stroke()

        // draw hand
        clockHandAngle = (baseTime % 360) - 90

        ctx.save()
        ctx.translate(clockCentreX, clockCentreY)
        ctx.rotate((clockHandAngle * Math.PI) / 180)
        ctx.fillStyle = "#ffff48"
        ctx.fillRect(-3, -2.5, 180, 5)
        ctx.restore()

        // draw pin
        ctx.beginPath()
        ctx.arc(clockCentreX, clockCentreY, 2, 0, 2 * Math.PI)
        ctx.fillStyle = "black"
        ctx.fill()
    }
}
