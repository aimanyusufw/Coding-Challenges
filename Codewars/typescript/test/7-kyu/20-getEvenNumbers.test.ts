import { getEvenNumbers } from "../../7-kyu/20-getEvenNumbers";

describe("Fixed tests", function () {
  it("should return an empty array if there are no even numbers", function () {
    expect(getEvenNumbers([1, 2, 3, 6, 8, 10])).toStrictEqual([2, 6, 8, 10]);
    expect(getEvenNumbers([1, 2])).toStrictEqual([2]);
    expect(getEvenNumbers([12, 14, 15])).toStrictEqual([12, 14]);
    expect(getEvenNumbers([13, 15])).toStrictEqual([]);
    expect(getEvenNumbers([1, 3, 9])).toStrictEqual([]);
  });
});
