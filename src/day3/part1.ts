import fs from "node:fs";

export const part1 = () => {
  const input = fs.readFileSync("src/day3/input.txt", "utf8");

  const calculationMatches = input.match(/mul\(\d+,\d+\)/g);
  let total = 0;
  calculationMatches?.forEach((match) => {
    const numbers = match.split("(")[1].split(")")[0].split(",");
    total += Number(numbers[0]) * Number(numbers[1]);
  });

  return total;
};
