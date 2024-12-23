import fs from "node:fs";

export const part2 = () => {
  const checkLevel = (levels) => {
    let decreasing = levels[0] > levels[1];
    let prevNum = levels[0];

    for (let x = 1; x < levels.length; x++) {
      const currNum = levels[x];
      let distance = Math.abs(currNum - prevNum);
      if (decreasing && currNum > prevNum) {
        return false;
      }
      if (!decreasing && currNum < prevNum) {
        return false;
      }

      if (distance > 3 || distance < 1) {
        return false;
      }

      prevNum = currNum;
    }

    return true;
  };

  const lines = fs.readFileSync("src/day2/input.txt", "utf8").split("\n");
  let safeReports = 0;
  for (const line of lines) {
    let levels = line.split(" ").map(Number);

    if (checkLevel(levels)) {
      safeReports++;
      continue;
    }

    for (let x = 0; x < levels.length; x++) {
      let withRemoved = [...levels];
      withRemoved.splice(x, 1);
      const levelStatus = checkLevel(withRemoved);
      if (levelStatus) {
        safeReports++;
        break;
      }
    }
  }

  return safeReports;
};
