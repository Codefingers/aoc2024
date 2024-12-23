import fs from "node:fs";

export const part1 = () => {
  const lines = fs.readFileSync("src/day2/input.txt", "utf8").split("\n");

  let safeReports = 0;
  for (const line of lines) {
    let levels = line.split(" ");

    let isDecreasing = +levels[0] > +levels[1];
    let prevNum = +levels[0];
    let isSafe = true;

    for (let x = 1; x < levels.length; x++) {
      const currNum = +levels[x];
      if (isDecreasing && currNum >= prevNum) {
        isSafe = false;
        break;
      }

      if (!isDecreasing && currNum <= prevNum) {
        isSafe = false;
        break;
      }

      if (Math.abs(prevNum - currNum) > 3) {
        isSafe = false;
        break;
      }

      prevNum = currNum;
    }

    if (isSafe) {
      safeReports++;
    }
  }

  return safeReports;
};
