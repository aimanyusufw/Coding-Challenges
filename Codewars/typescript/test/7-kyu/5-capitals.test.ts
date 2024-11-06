import { capitals } from "../../7-kyu/5-capitals";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(capitals("CodEWaRs")).toStrictEqual([0, 3, 4, 6]);
  });
});
