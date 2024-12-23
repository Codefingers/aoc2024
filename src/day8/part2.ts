import fs from "node:fs";
const lines = fs.readFileSync("src/day8/input.txt", "utf8").split("\n");

export const part2 = () => {
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

  let uniqueLocations = new Set<string>();
  aerialLocations.forEach((locations, key) => {
    locations.forEach(([x, y]) => {
      locations.forEach(([otherX, otherY]) => {
        if (x === otherX && y === otherY) {
          return;
        }

        const diffX = x - otherX;
        const diffY = y - otherY;
        let newX = x + diffX;
        let newY = y + diffY;
        let oppositeX = x - diffX;
        let oppositeY = y - diffY;

        while (
          !(
            newX < 0 ||
            newY < 0 ||
            newX > grid.length - 1 ||
            newY > grid[0].length - 1
          )
        ) {
          if (
            [".", ...Array.from(aerialLocations.keys())].includes(
              grid[newX][newY]
            )
          ) {
            uniqueLocations.add(`${newX},${newY}`);
          }

          newX = newX + diffX;
          newY = newY + diffY;
        }

        while (
          !(
            oppositeX < 0 ||
            oppositeY < 0 ||
            oppositeX > grid.length - 1 ||
            oppositeY > grid[0].length - 1
          )
        ) {
          if ([key].includes(grid[oppositeX][oppositeY])) {
            uniqueLocations.add(`${oppositeX},${oppositeY}`);
          }

          oppositeX = oppositeX - diffX;
          oppositeY = oppositeY - diffY;
        }
      });
    });
  });

  return uniqueLocations.size;
};
