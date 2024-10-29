import { makeUpperCase } from "../../8-kyu/3-makeUpperCase";

describe("MakeUpperCase", () => {
  it("Fixed tests", () => {
    expect(makeUpperCase("hello")).toBe("HELLO");
    expect(makeUpperCase("hello world")).toBe("HELLO WORLD");
    expect(makeUpperCase("hello world !")).toBe("HELLO WORLD !");
    expect(makeUpperCase("heLlO wORLd !")).toBe("HELLO WORLD !");
    expect(makeUpperCase("1,2,3 hello world!")).toBe("1,2,3 HELLO WORLD!");
  });
});
