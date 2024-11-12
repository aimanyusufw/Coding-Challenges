import { factorial } from "../../7-kyu/17-factorial";

describe("Basic tests", () => {
  it("Testing for 0", () => expect(factorial(0)).toBe(1));
  it("Testing for 1", () => expect(factorial(1)).toBe(1));
  it("Testing for 4", () => expect(factorial(4)).toBe(24));
  it("Testing for 7", () => expect(factorial(7)).toBe(5040));
  it("Testing for 17", () => expect(factorial(17)).toBe(355687428096000));
});
