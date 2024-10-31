import { zeroFuel } from "../../8-kyu/11-zeroFuel";

describe("zeroFill", function () {
  it("Sample Tests", function () {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
  });
});
