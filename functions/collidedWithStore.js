//------------vars------------
var interactionPressed = false
var storeOpened = false

// init GUI
const storeGUI = [
    { item: "potatoes", price: 0.86, quantity: 5},
    { item: "pepper seeds", price: 2.50, quantity: 2},
    { item: "persimmon seeds", price: 4.86, quantity: 4},
    { item: "carrots", price: 1.20, quantity: 1},
]

//------------functions------------
function collidedWithStore() {
    if (keys.e || (storeOpened && keys.escape)) {
        if (!interactionPressed) {
            interactionPressed = true
            storeOpened = !storeOpened
        }
    } else {
        interactionPressed = false
    }
}

function renderStore() {
    overlayUI += `
        <div style="
            width:500px; justify-content: center; display: flex;">
            <div style="
                width: 300px;
                height: auto;
                border: 1px solid red;
                color: white;
                background-color: #7a7a7a;
                text-align: center;
                padding: 15px 10px;
            ">
                <h2 style="text-align: center; font-size: 30px; margin: 10px 0;">Store</h2>
                <div style="
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(3, auto);
                ">
                    ${storeGUI.map(getAllItems).join("")}
                </div>
            </div>
        </div>
        `
}

function getAllItems(item) {
    if (item.quantity != "out of stock!") {
        return `
            <div style="display: grid; grid-template-rows: subgrid; grid-row: span 3">
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;">
                    <h2 style="margin-top: 10px; margin-bottom: 5px; font-size: 15px;">${item.item}</h2>
                    <hr style="margin: 0 3px; width: 15px;"/>
                    <small style="align-content: end; position: relative; top: 5px; font-size: 10px;">${item.quantity}</small>
                </div>
                <p style="margin-top: 0;">₼${parseFloat(item.price).toFixed(2)}</p>
                <button
                    style="background-color: #0cbb00; color: white"
                    onclick="addToPlayerInventory('${item.item}', ${item.quantity})"
                >
                    buy
                </button>
            </div>
        `
    }
    else {
        return `
            <div style="display: grid; grid-template-rows: subgrid; grid-row: span 3">
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;">
                    <h2 style="margin-top: 10px; margin-bottom: 5px; font-size: 15px;">${item.item}</h2>
                    <small style="align-content: end; position: relative; top: 5px; font-size: 15px;">${item.quantity}</small>
                </div>
                <p style="margin-top: 0;"></p>
                <button
                    style="background-color: #1f0019; color: white; font-size: 12px; padding: 4px;"
                >
                    check back later
                </button>
            </div>
        `
    }
}