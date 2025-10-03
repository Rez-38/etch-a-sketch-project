console.log("Hello World!");

// Nerdy/core logic setup...
let size = 16;
let totalTiles = size * size;
const boardSize = 960;
let tileSize = boardSize / size;


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
const currentSize = document.createElement('p');
    currentSize.classList.toggle('currentSize');
    currentSize.textContent = `${size} x ${size}`;
    currentSize.style.fontFamily = 'Ariel, sans-serif';
    currentSize.style.fontSize = '22px';
    currentSize.style.marginTop = '0px';
    currentSize.style.marginBottom = '0px';
    // currentSize.style.textAlign = 'center';

    sizeBtn.appendChild(currentSize);

// Board setup...
const board = document.querySelector('#board');
    board.style.width = `${boardSize}px`;
    board.style.height = `${boardSize}px`;
    board.style.backgroundColor = 'white';

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
    
        board.appendChild(tile);
        console.log("fresh grid ready");
    };
};

function tileBehavior() {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = 'navy';
            console.log("navy");
        });
    });
};
