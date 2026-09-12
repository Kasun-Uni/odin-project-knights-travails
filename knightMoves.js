function getValidMoves([x, y]) {
  const offsets = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  const moves = offsets.map(([dx, dy]) => [x + dx, y + dy]);

  return moves.filter(
    ([newX, newY]) => newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7
  );
}

console.log(getValidMoves([0, 0]));
console.log(getValidMoves([3, 3]));
console.log(getValidMoves([7, 7]));
