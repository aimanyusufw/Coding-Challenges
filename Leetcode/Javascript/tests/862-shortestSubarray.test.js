import { shortestSubarray } from "../src/862-shortestSubarray";

describe("Tests", () => {
  it("test", () => {
    expect(shortestSubarray([1], 1)).toBe(1);
    expect(shortestSubarray([1, 2], 4)).toBe(-1);
    expect(shortestSubarray([2, -1, 2], 3)).toBe(3);
  });
});
