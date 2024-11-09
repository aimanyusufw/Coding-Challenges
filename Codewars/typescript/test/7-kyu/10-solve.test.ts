import { solve } from "../../7-kyu/10-solve";

describe("Basic tests", function () {
  it("Testing for code", () => expect(solve("code")).toBe("code"));
  it("Testing for CODe", () => expect(solve("CODe")).toBe("CODE"));
  it("Testing for COde", () => expect(solve("COde")).toBe("code"));
  it("Testing for Code", () => expect(solve("Code")).toBe("code"));
});
