console.log("Hello World!");

const board = document.querySelector('#board');
const boardSize = 960;
board.style.width = `${boardSize}px`;
board.style.height = `${boardSize}px`;


const size = 16;
const totaltiles = size * size;

const tileSize = boardSize / size;

for (let i = 0; i < totaltiles; i++) {
    const tile = document.createElement('div');
    tile.classList.toggle('tile');

    tile.style.width = `${tileSize}px`;
    tile.style.height = `${tileSize}px`;

    board.appendChild(tile);
};

const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style.backgroundColor = 'navy';
    });
});