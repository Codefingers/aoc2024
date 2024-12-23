import fs from "node:fs";
const equations = fs.readFileSync("src/day7/input.txt", "utf8").split("\n");

export const part1 = () => {
  const testEquation = (
    numbers: number[],
    target: number,
    index: number,
    operator: string,
    total: number
  ): boolean => {
    if (index + 1 > numbers.length) {
      return total === target;
    }

    const currentNumber = numbers[index];
    if (operator == "+") {
      total += currentNumber;
    }

    if (operator == "*") {
      total *= currentNumber;
    }

    if (total > target) {
      return false;
    }

    if (testEquation(numbers, target, index + 1, "+", total)) {
      return true;
    }

    if (testEquation(numbers, target, index + 1, "*", total)) {
      return true;
    }

    return false;
  };

  let runningTotal = 0;
  for (const equation of equations) {
    let equationParts = equation.split(":");
    let target = +equationParts[0];
    let numbers = equationParts[1].split(" ").filter(Boolean).map(Number);

    if (testEquation(numbers, target, 1, "+", numbers[0])) {
      runningTotal += target;
      continue;
    }

    if (testEquation(numbers, target, 1, "*", numbers[0])) {
      runningTotal += target;
      continue;
    }
  }

  return runningTotal;
};
