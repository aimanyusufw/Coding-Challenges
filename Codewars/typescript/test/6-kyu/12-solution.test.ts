import { solution } from "../../6-kyu/12-solution";

describe("solution", function () {
  it("basic", function () {
    expect(solution("M")).toBe(1000);
    expect(solution("IV")).toBe(4);
    expect(solution("I")).toBe(1);
    expect(solution("MCMXC")).toBe(1990);
    expect(solution("MMVIII")).toBe(2008);
    expect(solution("MCDXLIV")).toBe(1444);
  });
});
