import { G964 } from "../../7-kyu/3-G964";

describe("Fixed Tests", function () {
  it("Basic tests nbDig", function () {
    expect(G964.nbDig(5750, 0)).toBe(4700);
    expect(G964.nbDig(11011, 2)).toBe(9481);
    expect(G964.nbDig(12224, 8)).toBe(7733);
    expect(G964.nbDig(11549, 1)).toBe(11905);
  });
});
