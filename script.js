// * Board Set-up

const boardContainer = document.querySelector('.board-container');
const gridSlider = document.querySelector('#grid-slider');
const gridDisplay = document.querySelector('.grid-display');
const eraser = document.querySelector('.eraser');

let numOfGrid = 16;
let color = '#000000';
let isActive = false;
let toggleEraser = false;

const createGrid = (numOfGrid) => {
  for (i = 0; i < numOfGrid * numOfGrid; i++) {
    const boardDiv = document.createElement('div');
    boardDiv.classList.add('single-div');
    boardContainer.appendChild(boardDiv);
  }

  boardContainer.setAttribute(
    'style',
    `grid-template-columns: repeat(${numOfGrid}, 1fr);`
  );
};

createGrid(numOfGrid);

gridSlider.oninput = () => {
  const singleDiv = document.querySelectorAll('.single-div');
  singleDiv.forEach((div) => {
    div.remove();
  });
  createGrid(parseInt(gridSlider.value));

  gridDisplay.textContent = `${parseInt(gridSlider.value)} x ${parseInt(
    gridSlider.value
  )}`;
};

eraser.addEventListener('click', () => {
  toggleEraser = !toggleEraser;

  if (!toggleEraser) {
    color = '#000000';
    eraser.setAttribute('style', 'border: none');
  } else {
    color = '#ffffff';
    eraser.setAttribute('style', 'border: 5px solid #ffb521');
  }
});

// * Sketching

const sketch = (e) => {
  const singleDiv = document.querySelectorAll('.single-div');

  e.target.style.backgroundColor = color;

  singleDiv.forEach((div) => {
    div.addEventListener('pointerover', (e) => {
      if (isActive) {
        div.style.backgroundColor = color;
      }
    });
  });
};

boardContainer.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  isActive = true;
  sketch(e);
});

boardContainer.addEventListener('pointerup', () => {
  isActive = false;
});
