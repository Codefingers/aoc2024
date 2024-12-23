import fs from "node:fs";

export const part2 = () => {
  const lines = fs.readFileSync("src/day5/input.txt", "utf8").split("\n\n");
  const rules = lines[0].split("\n");
  const updates = lines[1].split("\n");

  const sort = (a: string, b: string) => {
    const shouldBeBefore = `${a}|${b}`;
    const shouldBeAfter = `${b}|${a}`;

    if (rules.includes(shouldBeBefore)) {
      return -1;
    }

    if (rules.includes(shouldBeAfter)) {
      return 1;
    }

    return 0;
  };

  let total = 0;
  for (const update of updates) {
    const updateRow = update.split(",");
    const sorted = updateRow.toSorted(sort);

    if (sorted.toString() !== updateRow.toString()) {
      total += +sorted[(updateRow.length - 1) / 2];
    }
  }

  return total;
};
