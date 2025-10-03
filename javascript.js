console.log("Hello World!");

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

    // const currentSize = document.createElement('p');
    // currentSize.classList.toggle('currentSize');
    // currentSize.textContent = `${size} x ${size}`;
    // const buttons = document.querySelector('.buttons');
    // buttons.appendChild(currentSize);
});

const board = document.querySelector('#board');
const boardSize = 960;
board.style.width = `${boardSize}px`;
board.style.height = `${boardSize}px`;
board.style.backgroundColor = 'white';


let size = 16;
let totalTiles = size * size;

let tileSize = boardSize / size;

generateGrid();
// for (let i = 0; i < totalTiles; i++) {
//     const tile = document.createElement('div');
//     tile.classList.toggle('tile');

//     tile.style.width = `${tileSize}px`;
//     tile.style.height = `${tileSize}px`;

//     board.appendChild(tile);
// };

// Tile behavior...
tileBehavior();
// const tiles = document.querySelectorAll('.tile');
// tiles.forEach((tile) => {
//     tile.addEventListener('mouseover', () => {
//         tile.style.backgroundColor = 'navy';
//         console.log("navy");
//     });
// });

// const currentSize = document.createElement('p');
// currentSize.classList.toggle('currentSize');
// currentSize.textContent = `${size} x ${size}`;
// const buttons = document.querySelector('.buttons');
// buttons.appendChild(currentSize);


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

function generateBoard() {

};