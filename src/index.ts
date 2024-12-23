import { part1 } from "./day7/part1";

const runner = () => {
  console.log("Running solution...");

  console.time("Runtime");
  const answer = part1();
  console.timeEnd("Runtime");
  console.log(answer);
};

runner();
