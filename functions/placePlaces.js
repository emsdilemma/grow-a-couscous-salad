function placePlaces() {
    i = 0
    while (i <= 2) {
        var randPlaceTypeIndex = Math.floor(Math.random() * placesTypes.length)

        var pickedPlaceType = placesTypes[randPlaceTypeIndex]

        var randX = Math.floor(Math.random() * 500) + 1
        var randY = Math.floor(Math.random() * 500) + 1
        var pickedPlaceColour = placesColours[randPlaceTypeIndex]
        var pickedPlaceInteraction = placesInteractions[randPlaceTypeIndex]

        if (pickedPlaceType == "store") {
            numPlaces += 1
            places.push({
                x: randX,
                y: randY,
                width: 30,
                height: 10,
                colour: pickedPlaceColour,
                type: pickedPlaceType,
                interaction: pickedPlaceInteraction,
            })
        } else if (pickedPlaceType == "character") {
            numPlaces += 1
            places.push({
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