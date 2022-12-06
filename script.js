const boardContainer = document.querySelector('.board-container');
const gridInput = document.querySelector('#pixel');
const gridButton = document.querySelector('#btn-pixel');

let numOfGrid = 32;

for (i = 0; i < numOfGrid * numOfGrid; i++) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('single-div');
  boardContainer.appendChild(boardDiv);
}

boardContainer.setAttribute(
  'style',
  `grid-template-columns: repeat(${numOfGrid}, 1fr);`
);

const singleDiv = document.querySelectorAll('.single-div');
let color = '#000000';
let isActive = false;

const sketch = (e) => {
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

gridButton.addEventListener('click', () => {
  numOfGrid = parseInt(gridInput.value);
  console.log(typeof parseInt(gridInput.value));
});
