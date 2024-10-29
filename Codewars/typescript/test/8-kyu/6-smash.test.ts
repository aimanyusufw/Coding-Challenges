import { smash } from "../../8-kyu/6-smash";

describe("smash", () => {
  it("Should return empty string for empty array.", () => {
    expect(smash([])).toBe("");
  });

  it("One word example should return the word.", () => {
    expect(smash(["hello"])).toBe("hello");
  });

  it("Multiple words should be separated by spaces.", () => {
    expect(smash(["hello", "world"])).toBe("hello world");
    expect(smash(["hello", "amazing", "world"])).toBe("hello amazing world");
    expect(smash(["this", "is", "a", "really", "long", "sentence"])).toBe(
      "this is a really long sentence"
    );
  });
});
