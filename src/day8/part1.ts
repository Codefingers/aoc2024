import fs from "node:fs";
const lines = fs.readFileSync("src/day8/input.txt", "utf8").split("\n");

export const part1 = () => {
  let grid: string[][] = [];
  let aerialLocations = new Map<string, Set<number[]>>();

  for (let x = 0; x < lines.length; x++) {
    let row: string[] = [];
    for (let y = 0; y < lines[x].length; y++) {
      let char = lines[x][y];
      row.push(char);

      if (char !== ".") {
        let currentLocations = aerialLocations.get(char) || new Set();
        if (!currentLocations.size) {
          aerialLocations.set(char, new Set([[x, y]]));
        } else {
          currentLocations.add([x, y]);
          aerialLocations.set(char, currentLocations);
        }
      }
    }

    grid.push(row);
  }

  let uniqueLocations = 0;
  aerialLocations.forEach((locations) => {
    locations.forEach(([x, y]) => {
      locations.forEach(([otherX, otherY]) => {
        if (x === otherX && y === otherY) {
          return;
        }

        const diffX = x - otherX;
        const diffY = y - otherY;
        const newX = x + diffX;
        const newY = y + diffY;

        if (
          newX < 0 ||
          newY < 0 ||
          newX > grid.length - 1 ||
          newY > grid[0].length - 1
        ) {
          return;
        }

        if (grid[newX][newY] === ".") {
          uniqueLocations++;
        }
      });
    });
  });

  return uniqueLocations;
};
