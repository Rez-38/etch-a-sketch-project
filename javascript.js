console.log("Hello World!");

// Nerdy/core logic setup...
let size = 16;
let totalTiles = size * size;
const boardSize = 960;
let tileSize = boardSize / size;
// Rainbow colors setup...
const strawberry = 'rgb(255, 0, 0)';
const lime = 'rgb(0, 255, 0)';
const lemon = 'rgb(255, 255, 0)';
const orange = 'rgb(255, 102, 0)';
const grape = 'rgb(102, 0, 102)';
const raspberry = 'rgb(0, 0, 128)';
const starfruit = 'rgb(250, 128, 114)';
const passionfruit = 'rgb(0, 102, 204)';

const skittles = [
    strawberry,
    lime,
    lemon,
    orange,
    grape,
    raspberry,
    starfruit,
    passionfruit
];

// Brush button dependency
let hoverOn = true;

// Prompt button...
const sizeBtn = document.querySelector('#sizeBtn');
sizeBtn.addEventListener('click', () => {
    let newSize = 16;
    newSize = prompt('Select grid size (default is 16)...', '1-100');
    console.log(newSize);
    newSize = Number(newSize);
    
    if (!newSize) {
        return;
    } else if (size === newSize) {
        return;
    } else if (newSize < 1 || newSize > 100) {
        return;
    } else if (!Number.isInteger(newSize)) {
        return;
    }
    
    size = newSize;
    totalTiles = size * size;
    tileSize = boardSize / size;
    
    clearGrid();
    console.log("grid has been cleared");
    generateGrid();
    tileBehavior();
    
    currentSize.textContent = `${size} x ${size}`;
});



// Grid Size Display... DOM Node practice
const currentSize = document.createElement('span');
    currentSize.classList.toggle('currentSize');
    currentSize.textContent = `${size} x ${size}`;
    currentSize.style.fontFamily = 'Ariel, sans-serif';
    currentSize.style.fontSize = '22px';
    currentSize.style.marginTop = '0px';
    currentSize.style.marginBottom = '0px';

    sizeBtn.appendChild(currentSize);

// Board setup...
const board = document.querySelector('#board');
    board.style.width = `${boardSize}px`;
    board.style.height = `${boardSize}px`;
    board.style.backgroundColor = 'white';
// Fix arrow grabbing tiles bug...
    board.style.WebkitUserDrag = 'none';
    board.style.userSelect = 'none';
// Brush toggle...
let isDrawing = false;
console.log(`isDrawing = ${isDrawing}`);
board.addEventListener('mousedown', () => {
    console.log('mousedown');
    if (isDrawing == false) {
        isDrawing = true;
        console.log(`isDrawing = ${isDrawing}`);
    }
});
board.addEventListener('mouseup', () => {
    console.log('mouseup');
    if (isDrawing == true) {
        isDrawing = false;
        console.log(`isDrawing = ${isDrawing}`);
    }
});
document.addEventListener('mouseup', () => {
    console.log('document mouseup');
    if (isDrawing == true) {
        isDrawing = false;
        console.log(`isDrawing = ${isDrawing}`);
    }
});
board.addEventListener('mouseleave', () => {
    console.log('mouseleave');
    if (isDrawing == true) {
        isDrawing = false;
        console.log(`isDrawing = ${isDrawing}`);
    }
});

// Create Divs...
generateGrid();
// Change div/tile color...
tileBehavior();

// Clear Button...
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    clearGrid();
    console.log('grid has been cleared');
    generateGrid();
    tileBehavior();
});

// Brush Button...
console.log(`hoverOn is ${hoverOn}...`);
const brushBtn = document.querySelector('#brushBtn');
brushBtn.addEventListener('click', () => {
    if (hoverOn == true) {
        hoverOn = false;
    } else if (hoverOn == false) {
        hoverOn = true;
    }
    console.log("Brush button clicked...");
    console.log(`hoverOn is ${hoverOn}...`);
    onOff.textContent = `${hoverOn}`;
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Alt') {
        if (hoverOn == true) {
            hoverOn = false;
        } else {
            hoverOn = true;
        }
        console.log("Brush button hotkey was pressed...");
        console.log(`hoverOn is ${hoverOn}...`);
        onOff.textContent = `${hoverOn}`;
    }
});
//Brush Button Keybind Toggle animation setup...
document.addEventListener('keydown', (e) => {
    if (e.key === 'Alt') {
        brushBtn.classList.toggle('activeKey');

        setTimeout(() => {
            brushBtn.classList.toggle('activeKey');
        }, 100);
    }
}); 

// Display Brush Toggle On/off...
const onOff = document.createElement('span');
onOff.classList.toggle('onOff');
onOff.textContent = `${hoverOn}`;
onOff.style.fontFamily = 'Ariel, sans-serif';
onOff.style.fontSize = '22px';
onOff.style.marginTop = '0px';
onOff.style.marginBottom = '0px';

brushBtn.appendChild(onOff);

// Shading Toggle Button
let shadingOn = false;
document.querySelector('.shadeOnOff').textContent = `${shadingOn}`;
const shadingBtn = document.querySelector('#shadingBtn');
shadingBtn.addEventListener('click', () => {
    if (shadingOn == false) {
        shadingOn = true;
    } else {
        shadingOn = false;
    }
    console.log(`Shading button was pressed`);
    console.log(`Shading = ${shadingOn}`);
    document.querySelector('.shadeOnOff').textContent = `${shadingOn}`;
    shadingBtn.classList.toggle('shadingOn');
});

// Rainbow Toggle Button
let rainbow = false;
const rainbowBtn = document.querySelector('#rainbowBtn');
rainbowBtn.addEventListener('click', () => {
    if (rainbow == false) {
        rainbow = true;
        console.log(`rainbow = ${rainbow}`);
    } else {
        rainbow = false;
        console.log(`rainbow = ${rainbow}`);
    }
    rainbowBtn.classList.toggle('rainbowOn');
});

// ================
// Function Bank  =
// ================

function clearGrid() {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
};

function generateGrid() {
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('div');

        tile.classList.toggle('tile');
    
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        // Shading Setup
        tile.darkLevel = 0;
    
        board.appendChild(tile);
        console.log("fresh grid ready");
    };
};

function tileBehavior() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', () => {
            // if (shadingOn && hoverOn) {
            //     shadeTile(tile);
            //     return;
            // }
            if (shadingOn && hoverOn) {
                shadeTile(tile);
            } else if (shadingOn && isDrawing/* && hoverOn*/) {
                shadeTile(tile);
            }

            if (!hoverOn && isDrawing && !rainbow && !shadingOn) {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = 'navy';
                console.log("navy");
            } else if (!hoverOn && isDrawing && rainbow && !shadingOn) {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = randomSkittle();
                console.log("rainbow")
            } else if (hoverOn && !rainbow && !shadingOn) {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = 'navy';
                console.log("navy");
            } else if (hoverOn && rainbow && !shadingOn) {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = randomSkittle();
                console.log("rainbow");
            }
        });
        tile.addEventListener('mousedown', () => {
            /*if (shadingOn /*&& !hoverOn*//*) {
                shadeTile(tile);
                return;
            }*/
            if (shadingOn) {
                shadeTile(tile);
                console.log("shading");
            } else if (rainbow) {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = randomSkittle();
                console.log("rainbow");
            } else {
                tile.darkLevel = 0;
                tile.style.opacity = 1;
                tile.style.backgroundColor = 'navy';
                console.log('navy');
            }
        });
    });
};

function randomSkittle() {
    const randomIndex = Math.floor(Math.random() * skittles.length);
    const randomColor = skittles[randomIndex];
    return randomColor;
}

function shadeTile(tile) {
    let level = tile.darkLevel;
    if (level < 10) {
        ++level;
        tile.darkLevel = level;
        tile.style.opacity = level / 10;
    }
}