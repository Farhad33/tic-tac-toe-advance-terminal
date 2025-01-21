export function createBoard(size) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push(Array(size).fill(" "));
  }
  return board;
}

export function printBoard(board) {
  board.forEach((row) => {
    process.stdout.write(" |");
    row.forEach((cell) => {
      process.stdout.write(cell);
      process.stdout.write("|");
    });
    process.stdout.write("\n");
  });
  process.stdout.write("\n");
}
