import { validBraces } from "../../6-kyu/6-validBraces";

describe("solution", function () {
  it("should handle basic tests", function () {
    expect(validBraces("()")).toBe(true);
    expect(validBraces("[(])")).toBe(false);
  });
});
