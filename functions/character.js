//------------vars------------
var interactionPressed = false
var dialogueOpened = false
var selectedDialogueOption = 0

// init GUI
const characterGUI = [
    {
        author: "emma",
        dialogue: [
            `Press e inside the clock tower to see what time it is!
            <br/><br/>
            It can help you plan your crops and track how long they've been growing.`,
            `The store regularly restocks. Make sure to check it from time to time for new crops to grow!`,
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
    if (keys.e || (dialogueOpened && keys.escape)) {
        if (!interactionPressed) {
            interactionPressed = true
            dialogueOpened = !dialogueOpened
            if (dialogueOpened) {
                selectedDialogueOption = Math.floor(
                    Math.random() * characterGUI[0].dialogue.length
                )
            }
        }
    }
    else {
        interactionPressed = false
    }

}

function renderCharacterDialogue(dialogueOption) {
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
            <p>${characterGUI[0].dialogue[dialogueOption]}</p>
        </div>
    </div>
    `
}
