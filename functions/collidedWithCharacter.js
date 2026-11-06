//------------vars------------
var interactionPressed = false
var dialogueOpened = false

// init GUI
const characterGUI = [
    {
        author: "1mma",
        dialogue: [
            `List'ning their fear, I could not say “Amen,” When they did say “God bless us!”`,
            `second dialogue`,
            `third dialogue`,
        ],
    },
    {
        author: "2mma",
        dialogue: [
            `But after all it's better to ask for the earth than to take it.`,
        ],
    },
    {
        author: "emma",
        dialogue: [
            `The Communist Party does not fear criticism because we are Marxists, 
        the truth is on our side, and the basic masses, the workers and peasants, 
        are on our side.`,
        ],
    },
    { author: "4mma", dialogue: `Consider it not so deeply.` },
]

//------------functions------------
function collidedWithCharacter() {
    if (keys.e) {
        if (!interactionPressed) {
            interactionPressed = true
            dialogueOpened = !dialogueOpened
        }
    } else {
        interactionPressed = false
    }

    if (dialogueOpened) {
        overlayUI += `
        <div style="border: 0.5px solid white; margin: 50px;">
            <div style="
                border: 2px dashed #350000;
                background-color: white;
                color: black;
                padding: 5px 15%;
                padding-left: 5px;
                padding-top: 0;
            ">
                <h2>${characterGUI[0].author}</h2>
                <p>${characterGUI[0].dialogue[1]}</p>
            </div>
        </div>
        `
    }
}
