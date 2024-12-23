import fs from "node:fs";

const createGridFromLines = (): string[][] => {
  const lines = fs.readFileSync("src/day6/input.txt", "utf8").split("\n");
  const grid: string[][] = [];
  for (const line of lines) {
    let tiles = line.split("");
    let row: string[] = [];
    for (const tile of tiles) {
      row.push(tile);
    }

    grid.push(row);
  }

  return grid;
};

const getCurrentPosition = (grid: string[][]): number[] => {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === "^") {
        return [x, y];
      }
    }
  }

  return [];
};

const isOutsideGrid = (grid: string[][], x: number, y: number): boolean => {
  return x < 0 || x >= grid.length || y < 0 || y >= grid[x].length;
};

export const part1 = () => {
  const grid = createGridFromLines();
  let currentCoordinate: number[] = getCurrentPosition(grid);

  let xDirection = 0;
  let yDirection = -1;
  let visitedPositions = new Set<string>([
    `${currentCoordinate[0]},${currentCoordinate[1]}`,
  ]);
  let directionsToXY = new Map([
    [0, [-1, 0]],
    [1, [0, 1]],
    [2, [1, 0]],
    [3, [0, -1]],
  ]);

  let currentDirection = 0;
  while (true) {
    xDirection = directionsToXY.get(currentDirection)![0];
    yDirection = directionsToXY.get(currentDirection)![1];
    let nextX = currentCoordinate[0] + xDirection;
    let nextY = currentCoordinate[1] + yDirection;

    if (isOutsideGrid(grid, nextX, nextY)) {
      break;
    }

    if (grid[nextX][nextY] === "#") {
      currentDirection = (currentDirection + 1) % directionsToXY.size;
      continue;
    }

    currentCoordinate = [nextX, nextY];
    visitedPositions.add(`${nextX},${nextY}`);
  }

  return visitedPositions.size;
};
