// * Board Set-up

const boardContainer = document.querySelector('.board-container');
const gridSlider = document.querySelector('#grid-slider');
const gridDisplay = document.querySelector('.grid-display');

let numOfGrid = 16;
let color = '#000000';
let isActive = false;

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

// * Sketching

const sketch = (e) => {
  const singleDiv = document.querySelectorAll('.single-div');

  e.target.style.backgroundColor = color;

  singleDiv.forEach((div) => {
    div.addEventListener('pointermove', () => {
      if (isActive) {
        div.style.backgroundColor = color;
      }
    });
  });
};

boardContainer.addEventListener('pointerdown', (e) => {
  sketch(e);
  isActive = true;
});

boardContainer.addEventListener('pointerup', () => {
  isActive = false;
});
