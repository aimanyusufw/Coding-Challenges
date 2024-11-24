import { solution } from "../../6-kyu/11-solution";

describe("solution", function () {
  it("basic", function () {
    expect(solution(1000)).toBe("M");
    expect(solution(4)).toBe("IV");
    expect(solution(1)).toBe("I");
    expect(solution(1990)).toBe("MCMXC");
    expect(solution(2008)).toBe("MMVIII");
    expect(solution(1444)).toBe("MCDXLIV");
  });
});
