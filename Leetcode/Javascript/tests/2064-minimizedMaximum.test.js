import { minimizedMaximum, Solution } from "../src/2064-minimizedMaximum";

describe("Tests", () => {
  const solution = new Solution();
  it("test", () => {
    expect(minimizedMaximum(6, [11, 6])).toBe(3);
    expect(minimizedMaximum(7, [15, 10, 10])).toBe(5);
    expect(minimizedMaximum(1, [1000])).toBe(1000);
  });
  it("Solution", () => {
    expect(solution.minimizedMaximum(6, [11, 6])).toBe(3);
    expect(solution.minimizedMaximum(7, [15, 10, 10])).toBe(5);
    expect(solution.minimizedMaximum(1, [1000])).toBe(1000);
  });
});
