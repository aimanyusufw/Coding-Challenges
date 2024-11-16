import { resultsArray } from "../src/3254-resultsArray";

describe("Tests", () => {
  it("test", () => {
    expect(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)).toStrictEqual([
      3, 4, -1, -1, -1,
    ]);
    expect(resultsArray([2, 2, 2, 2, 2], 4)).toStrictEqual([-1, -1]);
    expect(resultsArray([3, 2, 3, 2, 3, 2], 2)).toStrictEqual([
      -1, 3, -1, 3, -1,
    ]);
  });
});
