import fs from "node:fs";
const equations = fs.readFileSync("src/day7/input.txt", "utf8").split("\n");

export const part1 = () => {
  const operators = ["+", "*"];

  const testEquation = (numbers: number[]): boolean => {
    for (const number of numbers) {
      let currentTotal = number;
      let sequence: string[] = []
      
      testEquation
    }

    return false;
  };

  let runningTotal = 0;
  for (const equation of equations) {
    let equationParts = equation.split(":");
    let test = +equationParts[0];
    let numbers = equationParts[1].split(" ").filter(Boolean).map(Number);

    let isValid = testEquation(numbers);
    if (isValid) {
      runningTotal += test;
    }
  }

  return runningTotal;
};
