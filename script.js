// * Board Set-up

const boardContainer = document.querySelector('.board-container');
const gridSlider = document.querySelector('#grid-slider');
const gridDisplay = document.querySelector('.grid-display');
const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.rainbow');
const grid = document.querySelector('.grid');
const clear = document.querySelector('.clear');
const colorPicker = document.querySelector('#color-picker');

let numOfGrid = 16;
let isActive = false;
let toggleEraser = false;
let toggleRainbow = false;
let toggleGrid = false;

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
    eraser.setAttribute('style', 'border: none');
  } else {
    eraser.setAttribute('style', 'border: 5px solid #ffb521');
  }
});

const randomColor = () => {
  let randomColor = Math.floor(Math.random() * 10 + 1);

  switch (randomColor) {
    case 1:
      return '#ffadad';
    case 2:
      return '#ffd6a5';
    case 3:
      return '#fdffb6';
    case 4:
      return '#caffbf';
    case 5:
      return '#9bf6ff';
    case 6:
      return '#a0c4ff';
    case 7:
      return '#bdb2ff';
    case 8:
      return '#fcc6ff';
    case 9:
      return '#feb144';
    default:
      return '#9ec1cf';
  }
};

rainbow.addEventListener('click', () => {
  toggleRainbow = !toggleRainbow;

  if (!toggleRainbow) {
    rainbow.setAttribute('style', 'border: none');
  } else {
    rainbow.setAttribute('style', 'border: 5px solid #ffb521');
  }
});

grid.addEventListener('click', () => {
  toggleGrid = !toggleGrid;

  const singleDiv = document.querySelectorAll('.single-div');

  singleDiv.forEach((div) => {
    if (toggleGrid) {
      div.style.border = '1px solid black';
    } else {
      div.style.border = 'none';
    }
  });

  if (!toggleGrid) {
    grid.setAttribute('style', 'border: none');
  } else {
    grid.setAttribute('style', 'border: 5px solid #ffb521');
  }
});

clear.addEventListener('click', () => {
  const singleDiv = document.querySelectorAll('.single-div');
  singleDiv.forEach((div) => {
    div.remove();
  });
  createGrid(parseInt(gridSlider.value));
});

// * Sketching

const sketch = () => {
  const singleDiv = document.querySelectorAll('.single-div');

  singleDiv.forEach((div) => {
    div.addEventListener('pointerover', () => {
      if (isActive && !toggleRainbow && !toggleEraser) {
        div.style.backgroundColor = colorPicker.value;
      } else if (isActive && toggleRainbow && !toggleEraser) {
        div.style.backgroundColor = randomColor();
      } else if (isActive && toggleEraser) {
        div.style.backgroundColor = '#ffffff';
      }
    });
  });
};

boardContainer.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  isActive = true;

  if (toggleEraser) {
    e.target.style.backgroundColor = '#ffffff';
  } else if (!toggleRainbow) {
    e.target.style.backgroundColor = colorPicker.value;
  } else {
    e.target.style.backgroundColor = randomColor();
  }

  sketch(e);
});

boardContainer.addEventListener('pointerup', () => {
  isActive = false;
});
