import { removeDuplicateWords } from "../../7-kyu/19-removeDuplicateWords";

describe("Sample Test Cases", function () {
  it("Should return a string", function () {
    expect(
      removeDuplicateWords(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      )
    ).toBe("alpha beta gamma delta");
  });
});
