console.log("Hello World!");

const board = document.querySelector('#board');
const boardSize = 960;
board.style.width = `${boardSize}px`;
board.style.height = `${boardSize}px`;


let size = 16;
const totalTiles = size * size;

const tileSize = boardSize / size;

generateGrid();
// for (let i = 0; i < totalTiles; i++) {
//     const tile = document.createElement('div');
//     tile.classList.toggle('tile');

//     tile.style.width = `${tileSize}px`;
//     tile.style.height = `${tileSize}px`;

//     board.appendChild(tile);
// };

// Tile behavior...
const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = 'navy';
    });
});

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

    clearGrid();
    console.log("grid has been cleared")
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
    };
};