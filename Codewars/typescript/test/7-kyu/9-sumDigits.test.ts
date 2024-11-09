import { sumDigits } from "../../7-kyu/9-sumDigits";

describe("example", function () {
  it("test", function () {
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(-32)).toBe(5);
  });
});
