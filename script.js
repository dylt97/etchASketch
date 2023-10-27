let container = document.getElementById('gridContainer');
let boxes;
let color = document.querySelector('#colorSelect');

const gridButton = document.querySelector('#gridBtn');
gridButton.addEventListener('click', function() {
    let choice = parseInt(prompt('What size grid would you use', 'Maximum: 99!'));
    if (choice < 100) {createGrid(choice)} else {alert('Error Maximum exceeded')};
    boxes = container.querySelectorAll('div');
});

function createGrid (gridSize) {
    container.innerHTML = '';
    for (let i = 1; i <= gridSize*gridSize; i++) {
        let tile = document.createElement('div');
        container.appendChild(tile);
    };

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
};

let isDrawing = false;
window.addEventListener('mousedown', () => {
    isDrawing = true;
});
window.addEventListener('mouseup', () => {
    isDrawing = false;
});
container.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

function colorDivs() {
    boxes = container.querySelectorAll('div');

    container.addEventListener('mousedown', (e) => {

        boxes.forEach(box => box.addEventListener('mouseover', function () {
            if (isDrawing) {
                switch (e.button) {
                    case 0: this.style.backgroundColor = color.value;
                    break;

                    case 2: this.style.backgroundColor = '';
                };
            };
        }));

    });
};

colorDivs();