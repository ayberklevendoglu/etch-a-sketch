


function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size*size; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    board.appendChild(div);
  }
}

function changeSize() {
  let size = prompt("Enter the size of the board");
  switch (true) {
    case (size > 100):
      alert("Size should be less than 100");
      return;
    case (size < 16):
      alert("Size should be greater than 15");
      return;
    case (size == null):
      return;
    case (isNaN(size)):
      alert("Size should be a number");
      return;
    case (size.includes(".")):
      alert("Size should be an integer");
      return;
    case (size.includes(" ")):
      alert("Size should not contain spaces");
      return;
  }
  let board = document.querySelector(".board");
  board.innerHTML = "";
  createBoard(size);
}

let changeSizeBtn = document.querySelector(".change-size-btn");
changeSizeBtn.addEventListener("click", changeSize);

function resetBoard() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("dark-bg");
  });
}

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", resetBoard);


function blackBoard() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.add("dark-bg");
  });
}

let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", blackBoard);
});



