import { findUniq } from "../../6-kyu/1-findUniq";

describe("findUniq", () => {
  it("should handle sample cases", () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
    expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55);
  });
});
