import { digPow } from "../../6-kyu/18-digPow";

describe("Tests", () => {
  it("test", () => {
    expect(digPow(89, 1)).toBe(1);
    expect(digPow(92, 1)).toBe(-1);
    expect(digPow(46288, 3)).toBe(51);
  });
});
