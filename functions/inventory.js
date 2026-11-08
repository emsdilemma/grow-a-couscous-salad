//------------vars------------
var playerInventory = []

//------------functions------------
function showInventory() {
    overlayUI += `
    <div style="
        padding: 50px 10%;
        padding-top: 0;
        margin: 50px;
        margin-top: 10px;
        border: 2px solid #c1c1c1;
        background-color: #1100ff99;
        color: white;
    ">
        <h2>Inventory</h2>
        <div style="display: flex; flex-direction: row; gap: 10%;">
            ${playerInventory.map(getInventory).join("")}
        </div>
    </div>`
}

function getInventory(playerInventory) {
    return `
        <p style="text-align: center;"><b>${playerInventory.item}</b>: ${playerInventory.quantity}</p>
    `
}

function addToPlayerInventory(itemToAdd, quantityToAdd) {
    const targetItem = playerInventory.find(product => product.item == itemToAdd)
    if (targetItem) {
        targetItem.quantity += quantityToAdd
    }
    else {
        playerInventory.push(
            {item: itemToAdd, quantity: quantityToAdd}
        )
    }
    
    let index = storeGUI.findIndex(storeItem => storeItem.item == itemToAdd)
    if (index > -1) {
        storeGUI.splice(index, 1, {item: "", NaN, quantity: "out of stock!"})
    }
}