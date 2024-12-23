import fs from "node:fs";

export const part2 = () => {
  const lines = fs.readFileSync("src/day4/input.txt", "utf8").split("\n");

  let totalFound = 0;
  let validWords = ["MAS", "SAM"];

  for (let x = 0; x < lines.length; x++) {
    for (let y = 0; y < lines[x].length; y++) {
      const char = lines[x][y];
      if (x < 0 || x >= lines.length || y < 0 || y >= lines[x].length) {
        continue;
      }

      if (char === "A") {
        try {
          let tl = lines[x - 1][y - 1];
          let tr = lines[x - 1][y + 1];
          let bl = lines[x + 1][y - 1];
          let br = lines[x + 1][y + 1];

          const diagonal = `${tl}A${br}`;
          const diagonal2 = `${tr}A${bl}`;

          if (validWords.includes(diagonal) && validWords.includes(diagonal2)) {
            totalFound++;
          }
        } catch {
          continue;
        }
      }
    }
  }

  return totalFound;
};
