import { findNb } from "../../6-kyu/5-findNb";

describe("Fixed Tests nbMonths", function () {
  it("Basic tests", function () {
    expect(findNb(4183059834009)).toBe(2022);
    expect(findNb(24723578342962)).toBe(-1);
    expect(findNb(135440716410000)).toBe(4824);
    expect(findNb(40539911473216)).toBe(3568);
  });
});
