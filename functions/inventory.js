//------------vars------------
var playerInventory = [{ item: "hand", quantity: 1 }]
var holdingItem = false
var pressedAnInventoryKey = false

var itemHeldIndex = 0
var itemHeldName = ""
var usedItemIndex = 0
var itemArrIndex = 0

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
    if (playerInventory.item !== "hand")
        return `
        <p style="text-align: center;"><b>${playerInventory.item}</b>: ${playerInventory.quantity}</p>
    `
}

function addToPlayerInventory(itemToAdd, quantityToAdd, itemToAddId) {
    const targetItem = playerInventory.find(
        (product) => product.item === itemToAdd
    )
    if (targetItem) {
        targetItem.quantity += quantityToAdd
    } else {
        playerInventory.push({ item: itemToAdd, quantity: quantityToAdd })
    }

    let index = storeGUI.findIndex(
        (storeItem) => storeItem.productId === itemToAddId
    )

    if (index > -1) {
        storeGUI.splice(index, 1, { item: "", NaN, quantity: "out of stock!" })
    }
}

function holdItem() {
    const inventoryKeys = ["1", "2", "3", "4", "5"]
    for (let i = 0; i < inventoryKeys.length; i++) {
        itemArrIndex = Number(inventoryKeys[i]) - 1 // hotkey "1" -> index 0
        if (
            keys[inventoryKeys[i]] &&
            Number(inventoryKeys[i]) - 1 in playerInventory
        ) {
            itemHeldIndex = itemArrIndex
            itemHeldName = playerInventory[itemHeldIndex]
        }
    }
}

function displayHeldItem() {
    if (itemHeldIndex in playerInventory) {
        if (!fadeHeldDisplay) {
            overlayUI += `
                <p style="
                    position: absolute;
                    left: 10px;
                    top: -5px;
                    color: #ffffff;
                    ">
                    ${playerInventory[itemHeldIndex].item}
                </p>
            `
        } else {
            overlayUI += `
                <p style="
                    position: absolute;
                    left: 10px;
                    top: -5px;
                    color: #ffffff4d;
                    ">
                    ${playerInventory[itemHeldIndex].item}
                </p>
            `
        }
    }
}
