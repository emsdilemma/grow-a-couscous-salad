//------------vars------------
var playerInventory = [
    {item: "apple", quantity: 1},
    {item: "orange", quantity: 3},
]

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
        <div style="display: flex; flex-direction: row; gap: 10%">
            ${playerInventory.map(getInventory).join("")}
        </div>
    </div>`
}

function getInventory(playerInventory) {
    return `
        <p><b>${playerInventory.item}</b>: ${playerInventory.quantity}</p>
    `
}