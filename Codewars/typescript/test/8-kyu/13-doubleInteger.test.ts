import { doubleInteger } from "../../8-kyu/13-doubleInteger";

describe("Double integer", () => {
  it("Fixed tests", () => {
    expect(doubleInteger(2)).toBe(4);
    expect(doubleInteger(8)).toBe(16);
    expect(doubleInteger(9)).toBe(18);
  });
});
