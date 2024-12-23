import { part2 } from "./day7/part2";

const runner = () => {
  console.log("Running solution...");

  console.time("Runtime");
  const answer = part2();
  console.timeEnd("Runtime");
  console.log(answer);
};

runner();
