import { part2 } from "./day8/part2";

const runner = () => {
  console.log("Running solution...");

  console.time("Runtime");
  const answer = part2();
  console.timeEnd("Runtime");
  console.log(answer);
};

runner();
