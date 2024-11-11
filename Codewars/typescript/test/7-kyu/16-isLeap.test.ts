import { isLeap } from "../../7-kyu/16-isLeap";

describe("Example tests", () => {
  it("Year 2020 is a leap year", () => {
    expect(isLeap(2020)).toBe(true);
  });

  it("Year 2000 is a leap year", () => {
    expect(isLeap(2000)).toBe(true);
  });

  it("Year 2015 is not a leap year", () => {
    expect(isLeap(2015)).toBe(false);
  });

  it("Year 2100 is not a leap year", () => {
    expect(isLeap(2100)).toBe(false);
  });
});
