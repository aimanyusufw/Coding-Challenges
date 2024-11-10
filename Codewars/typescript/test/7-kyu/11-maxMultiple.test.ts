import { maxMultiple } from "../../7-kyu/11-maxMultiple";

describe("Fixed tests", () => {
  it("maxMultiple(2, 7)", () => expect(maxMultiple(2, 7)).toBe(6));
  it("maxMultiple(3, 10)", () => expect(maxMultiple(3, 10)).toBe(9));
  it("maxMultiple(7, 17)", () => expect(maxMultiple(7, 17)).toBe(14));
  it("maxMultiple(10, 50)", () => expect(maxMultiple(10, 50)).toBe(50));
  it("maxMultiple(37, 200)", () => expect(maxMultiple(37, 200)).toBe(185));
  it("maxMultiple(7, 100)", () => expect(maxMultiple(7, 100)).toBe(98));
});
