import fs from "node:fs";

export const part1 = () => {
  const lines = fs.readFileSync("src/day1/input.txt", "utf8").split("\n");

  let leftList: number[] = [];
  let rightList: number[] = [];
  for (let line of lines) {
    leftList.push(+line.split("   ")[0]);
    rightList.push(+line.split("   ")[1]);
  }

  leftList.sort();
  rightList.sort();

  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    totalDistance += Math.abs(leftList[i] - rightList[i]);
  }

  return totalDistance;
};
