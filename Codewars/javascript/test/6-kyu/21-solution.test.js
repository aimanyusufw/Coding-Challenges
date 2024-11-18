import { solution } from "../../6-kyu/21-solution";

describe("Sample tests", () => {
  it("Sample test 1", () => {
    expect(solution("")).toBe("");
  });
  it("Sample test 2", () => {
    expect(solution("camelCasing")).toBe("camel Casing");
  });
  it("Sample test 3", () => {
    expect(solution("camelCasingTest")).toBe("camel Casing Test");
  });
});
