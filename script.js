const boardContainer = document.querySelector('.board-container');

for (i = 0; i < 256; i++) {
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('single-div');
  boardContainer.appendChild(boardDiv);
}
