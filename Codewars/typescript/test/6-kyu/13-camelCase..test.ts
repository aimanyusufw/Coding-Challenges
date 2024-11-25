import { camelCase } from "../../6-kyu/13-camelCase";

describe("Sample Test Cases", function () {
  it("Should return a CamelCased string", function () {
    expect(camelCase("")).toBe("");
    expect(camelCase("test case")).toBe("TestCase");
    expect(camelCase("camel case method")).toBe("CamelCaseMethod");
    expect(camelCase("say hello")).toBe("SayHello");
    expect(camelCase("camel case word")).toBe("CamelCaseWord");
  });
});
