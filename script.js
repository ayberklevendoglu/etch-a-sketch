let color = "black";

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
    div.addEventListener("mouseenter", colorSquare);
    board.appendChild(div);
  }
}

function changeSize(input) {
  if (input > 15 && input <= 100) {
    createBoard(input);
  } else {
    console.log("ERROR");
  }
}

function resetBoard() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetBoard);

function colorSquare(){
  if(mouseDown){
    if(color === 'random'){
      this.style.backgroundColor = 'hsl(' + (360 * Math.random()) + ',50%,50%)';
    }else{
      this.style.backgroundColor = color;
    }
}
}

function changeColor(choice){
  color = choice;
}

