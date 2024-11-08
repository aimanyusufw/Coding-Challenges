import { twoOldestAges } from "../../7-kyu/7-twoOldestAges";

describe("Two Oldest Age", () => {
  it("twoOldestAges([1,5,87,45,8,8]) should return [45,87]", () => {
    expect(twoOldestAges([1, 5, 87, 45, 8, 8])).toStrictEqual([45, 87]);
  });
});
