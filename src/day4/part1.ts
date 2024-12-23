import fs from "node:fs";

export const part1 = () => {
  const lines = fs.readFileSync("src/day4/input.txt", "utf8").split("\n");
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
    [-1, 1], // up right
    [-1, -1], // up left
    [1, 1], // down right
    [1, -1], // down left
  ];

  // loop through input and find all possible xmas or samx
  let totalFound = 0;

  for (let x = 0; x < lines.length; x++) {
    for (let y = 0; y < lines[x].length; y++) {
      for (const direction of directions) {
        let word = "";
        for (let i = 0; i < 4; i++) {
          const newX = x + direction[0] * i;
          const newY = y + direction[1] * i;

          if (
            newX < 0 ||
            newX >= lines.length ||
            newY < 0 ||
            newY >= lines[newX].length
          ) {
            break;
          }

          word += lines[newX][newY];
        }

        if (word === "XMAS" || word === "SAMX") {
          totalFound++;
        }
      }
    }
  }

  return totalFound / 2;
};
