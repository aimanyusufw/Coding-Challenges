import { solution } from "../../7-kyu/4-solution";

describe("Sample Test Cases", function () {
  it("Should return an array", function () {
    expect(solution([1, 2, 10, 50, 5])).toStrictEqual([1, 2, 5, 10, 50]);
    expect(solution([])).toStrictEqual([]);
  });
});
