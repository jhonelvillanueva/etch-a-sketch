const boardContainer = document.querySelector('.board-container');
const singleDiv = document.querySelectorAll('.single-div');
let numOfGrid = 16;
let color = '#000000';
let isActive = false;

for (i = 0; i < numOfGrid * numOfGrid; i++) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('single-div');
  boardContainer.appendChild(boardDiv);
}

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
