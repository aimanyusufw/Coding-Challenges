import { listSquared } from "../../5-kyu/7-listSquared";

function testing(m: number, n: number, expected: number[][]) {
  expect(listSquared(m, n)).toStrictEqual(expected);
}

describe("Fixed Tests", function () {
  it("listSquared", function () {
    testing(1, 250, [
      [1, 1],
      [42, 2500],
      [246, 84100],
    ]);
    testing(42, 250, [
      [42, 2500],
      [246, 84100],
    ]);
    testing(250, 500, [[287, 84100]]);
    testing(300, 600, []);
  });
});
