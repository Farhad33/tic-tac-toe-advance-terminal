import { createBoard, printBoard } from "./board.js";
import { getUserInput } from "./user-input.js";
import { checkGameStatus } from "./game-logic.js";

async function runGame() {
  console.log("Welcome to Tic-Tac-Toe!");
  const boardSize = await getUserInput("Enter the size of the board: ");
  const board = createBoard(Number(boardSize));
  printBoard(board);

  const firstPlayer = "X";
  const secondPlayer = "O";
  let turn = firstPlayer;
  while (true) {
    let row = await getUserInput(`Player ${turn}, enter row: `);
    let column = await getUserInput(`Player ${turn}, enter column: `);
    row = Number(row) - 1;
    column = Number(column) - 1;
    if (board[row][column] !== " ") {
      console.log("Cell already taken. Try again.");
      continue;
    }
    board[row][column] = turn;
    printBoard(board);
    const result = checkGameStatus(board);
    if (result) {
      console.log(`Player ${turn} wins!`);
      break;
    }
    if (turn === firstPlayer) {
      turn = secondPlayer;
    } else {
      turn = firstPlayer;
    }
  }
}

runGame();
