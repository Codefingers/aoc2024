import fs from "node:fs";

export const part2 = () => {
  const input = fs.readFileSync("src/day3/input.txt", "utf8");

  // get matches along with their indexs
  const calculationMatches = [...input.matchAll(/mul\(\d+,\d+\)/g)];
  const doMatches = [...input.matchAll(/do\(\)/g)];
  const dontMatches = [...input.matchAll(/don\'t\(\)/g)];

  // get array of instructions
  let instructions = new Map<number, string | number[]>();

  // build instructions
  doMatches.forEach((doMatch) => {
    instructions.set(doMatch.index, "DO");
  });

  dontMatches.forEach((dontMatch) => {
    instructions.set(dontMatch.index, "DONT");
  });

  calculationMatches.forEach((calculationMatch) => {
    const numbers = calculationMatch[0]
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map(Number);
    instructions.set(calculationMatch.index, numbers);
  });

  // get sorted instruction indexes
  const instructionIndexes = [...instructions.keys()].sort((a, b) =>
    a > b ? 1 : -1
  );

  let total = 0;
  let shouldMultiply = true;
  for (const instructionIndex of instructionIndexes) {
    console.log(instructionIndex);
    const instruction = instructions.get(instructionIndex);
    if (instruction === "DO") {
      shouldMultiply = true;
      continue;
    }

    if (instruction === "DONT") {
      shouldMultiply = false;
      continue;
    }

    if (!shouldMultiply) {
      continue;
    }

    const multipliedVal =
      (instruction![0] as unknown as number) *
      (instruction![1] as unknown as number);
    total += multipliedVal;
  }

  return total;
};
