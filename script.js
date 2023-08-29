let board = document.querySelector(".board");
let mouseDown = false;
board.onmousedown = function (event) {
  event.preventDefault();
  mouseDown = true;
};
board.onmouseup = function (event) {
  event.preventDefault();
  mouseDown = false;
};

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    board.removeChild(square);
  });
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseenter", () => {
      console.log(mouseDown);
      if (mouseDown) {
        blackBoard(div);
      }
    });
    board.appendChild(div);
  }
}

function changeSize(input) {
  createBoard(input);
}


function resetBoard() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("dark-bg");
  });
}

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetBoard);

function blackBoard(cell) {
  cell.classList.add("dark-bg");
}
