import { sqInRect } from "../../6-kyu/14-sqInRect";

function testing(l: number, w: number, expected: number[] | null) {
  expect(sqInRect(l, w)).toStrictEqual(expected);
}

describe("Fixed Tests sqInRect", function () {
  it("Basic tests", function () {
    testing(5, 5, null);
    testing(5, 3, [3, 2, 1, 1]);
    testing(3, 5, [3, 2, 1, 1]);
    testing(20, 14, [14, 6, 6, 2, 2, 2]);
    testing(14, 20, [14, 6, 6, 2, 2, 2]);
  });
});
