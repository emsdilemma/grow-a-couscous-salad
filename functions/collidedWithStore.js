const overlay = document.getElementById("overlay")
var storeOpen = false

function collidedWithStore() {
    overlay.innerHTML = `
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

function getAllItems(item) {
    //debugBar.innerHTML = `<h2>${item.item}</h2> <p>${item.price}</p>`
    return `
    <div>
        <h2>${item.item}</h2>
        <p>${item.price}</p>
    </div>    
    `
}
