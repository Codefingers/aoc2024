import fs from "node:fs";

export const part1 = () => {
  const lines = fs.readFileSync("src/day5/input.txt", "utf8").split("\n\n");
  const section1 = lines[0].split("\n");
  const section2 = lines[1].split("\n");

  let pageRules = new Map<string, string[]>();
  for (const parts of section1) {
    const [x, y] = parts.split("|");
    const currentRules = pageRules.get(x) || [];
    currentRules.push(y);
    pageRules.set(x, currentRules);
  }

  let total = 0;
  for (const section2Line of section2) {
    const updates = section2Line.split(",");
    let isValid = true;
    updates.forEach((update, index) => {
      let rules = pageRules.get(update);
      if (!rules) {
        return;
      }

      for (let i = index; i >= 0; i--) {
        if (rules.includes(updates[i])) {
          isValid = false;
          break;
        }
      }

      if (!isValid) {
        return;
      }
    });

    if (isValid) {
      const middleNumber = +updates[(updates.length - 1) / 2];
      total += middleNumber;
    }
  }

  return total;
};
