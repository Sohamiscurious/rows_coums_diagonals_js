const generateCombos = (n) => {
  if (n === 1) {
    return [[1]];
  }

  let grid = Array.from({ length: n * n }).map((_, index) => index + 1);

  const rows = [];
  const columns = [];
  const diagonals = [];

  for (let i = 0; i < n; i++) {
    rows.push(grid.slice(i * n, (i + 1) * n));
    columns.push(Array.from({ length: n }, (_, j) => grid[i + j * n]));
  }

  diagonals.push(Array.from({ length: n }, (_, i) => grid[i * (n + 1)]));
  diagonals.push(Array.from({ length: n }, (_, i) => grid[(i + 1) * (n - 1)]));

  return rows.concat(columns).concat(diagonals);
};

// Command-line arguments
const [_1, _2, sizeStr, ..._3] = process.argv;
let size = Number(sizeStr);

// Generate combinations
let combos = generateCombos(size);

// Print combinations
combos.forEach((combo) => {
  console.log(combo.join(","));
});

module.exports = { generateCombos };
