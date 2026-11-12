//------------vars------------
const placesTemplate = [
    {type: "store", colour: "#008800"},
    {type: "character", colour: "#1100ff"},
    {type: "farm", colour: "#880000"},
    {type: "clockTower", colour: "#fbff00"}
]

var places = []

var numPlaces = 0
var numFarms = 0

var placedPlaces = false

//------------functions------------
function placePlaces() {
    // store
    places.push({
        x: 220,
        y: 240,
        width: 80,
        height: 60,
        type: placesTemplate[0].type,
        colour: placesTemplate[0].colour,
    })
    numPlaces += 1

    // farm
    let farmCurrentY = 0
    for (i = 1; i <= 3; i++){ // 2 rows
        let farmCurrentX = 118
        for (j = 1; j <= 12; j++){ // of 12 columns
            let growTimeVarianceArr = []

            let k = 0
            while (k < 5) {
                growTimeVarianceArr.push(Math.floor(Math.random() * 10))
                k++
            }
            places.push({
            x: farmCurrentX,
            y: farmCurrentY,
            width: 30,
            height: 30,
            type: placesTemplate[2].type,
            colour: placesTemplate[2].colour,
            farmId: numFarms,
            plantedTime: null,
            growStage: 0,
            passedStages: [false, false, false, false, false],
            growTimeVariance: growTimeVarianceArr,
            })
            farmCurrentX += 32
            numFarms += 1
        }
        farmCurrentY += 32
    }
    numPlaces += 1

    // character
    places.push({
        x: 342,
        y: 94,
        width: 30,
        height: 30,
        type: placesTemplate[1].type,
        colour: placesTemplate[1].colour,
    })
    numPlaces += 1

    // clock tower
    places.push({
        x: 440,
        y: 240,
        width: 60,
        height: 60,
        type: placesTemplate[3].type,
        colour: placesTemplate[3].colour,
    })

    placedPlaces = true
}