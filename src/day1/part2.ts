import fs from "node:fs";

export const part2 = () => {
  const lines = fs.readFileSync("src/day1/input.txt", "utf8").split("\n");

  let leftList: number[] = [];
  let rightList: number[] = [];
  for (let line of lines) {
    leftList.push(+line.split("   ")[0]);
    rightList.push(+line.split("   ")[1]);
  }

  let similarityScore = 0;
  let dict = new Map();
  for (let i = 0; i < leftList.length; i++) {
    if (!dict.has(leftList[i])) {
      const quantity = rightList.filter((rNum) => rNum === leftList[i]).length;
      const currSimScore = leftList[i] * quantity;
      dict.set(leftList[i], currSimScore);
      similarityScore += currSimScore;
      continue;
    }

    similarityScore += dict.get(leftList[i]);
  }

  return similarityScore;
};
