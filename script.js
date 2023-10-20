let width = document.getElementById('gridContainer').offsetWidth;
let height = document.getElementById('gridContainer').offsetHeight;

let container = document.getElementById('gridContainer');

const gridButton = document.querySelector('#gridBtn');
gridButton.addEventListener('click', function() {
    let choice = prompt('What size grid would you use', 'Maximum of 100');
    createGrid(choice);
});

function createGrid (gridSize) {
    container.innerHTML = '';
    for (let i = 1; i <= gridSize*gridSize; i++) {
        let tile = document.createElement('div');
        container.appendChild(tile);
        tile.style.border = '1px solid red';
    };

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
};

