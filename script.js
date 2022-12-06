const boardContainer = document.querySelector('.board-container');

for (i = 0; i < 256; i++) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('single-div');
  boardContainer.appendChild(boardDiv);
}

const singleDiv = document.querySelectorAll('.single-div');
let color = '#000000';
let isActive = false;

const sketch = (e) => {
  e.target.style.backgroundColor = color;
};

boardContainer.addEventListener('pointerdown', (e) => {
  isActive = !isActive;
  sketch(e);

  if (isActive) {
    singleDiv.forEach((div) => {
      div.addEventListener('pointermove', () => {
        div.style.backgroundColor = color;
      });
    });
  }
});
