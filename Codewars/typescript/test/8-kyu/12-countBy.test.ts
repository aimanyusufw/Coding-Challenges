import { countBy } from "../../8-kyu/12-countBy";

describe("Fixed tests", function () {
  it("countBy(1, 10)", () =>
    expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  it("countBy(2, 5)", () =>
    expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]));
  it("countBy(3, 7)", () =>
    expect(countBy(3, 7)).toStrictEqual([3, 6, 9, 12, 15, 18, 21]));
  it("countBy(50, 5)", () =>
    expect(countBy(50, 5)).toStrictEqual([50, 100, 150, 200, 250]));
  it("countBy(100, 6)", () =>
    expect(countBy(100, 6)).toStrictEqual([100, 200, 300, 400, 500, 600]));
});
