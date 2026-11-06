//------------vars------------
var interactionPressed = false
var storeOpened = false

// init GUI
const storeGUI = [
    {item: "apple", price: 0.86},
    {item: "orange", price: 3.5},
    {item: "banana", price: 2.1},
]

//------------functions------------
function collidedWithStore() {
    if (keys.e) {
        if (!interactionPressed) {
            interactionPressed = true
            storeOpened = !storeOpened
        }
    } else {
        interactionPressed = false
    }

    if (storeOpened){
        overlayUI += `
        <div style="
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 300px;
            height: 200px;
            border: 1px solid red;
            color: white;
            text-align: center
        ">
            ${storeGUI.map(getAllItems).join("")}
        </div>
        `
    }
}

function getAllItems(item) {
    //debugBar.textcontext = `<h2>${item.item}</h2> <p>${item.price}</p>`
    return `
    <div>
        <h2>${item.item}</h2>
        <p>${item.price}</p>
    </div>    
    `
}
