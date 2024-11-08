import { checkExam } from "../../7-kyu/8-checkExam";

describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    expect(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])).toBe(6);
    expect(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])).toBe(7);
    expect(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])).toBe(16);
    expect(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])).toBe(0);
  });
});
