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
function bfs(start, end) {
  const queue = [[start]]; // each queue entry is a full path (array of squares)
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const currentSquare = path[path.length - 1];

    if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
      return path;
    }

    const nextMoves = getValidMoves(currentSquare);

    for (const move of nextMoves) {
      const key = move.toString();
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([...path, move]);
      }
    }
  }

  return null; // shouldn't happen on a valid 8x8 board
}
function knightMoves(start, end) {
  const path = bfs(start, end);

  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((square) => {
    console.log(`  [${square[0]},${square[1]}]`);
  });
}

knightMoves([3, 3], [4, 3]);