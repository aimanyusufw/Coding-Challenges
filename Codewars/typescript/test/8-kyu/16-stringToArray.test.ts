import { stringToArray } from "../../8-kyu/16-stringToArray";

describe("stringToArray", () => {
  it("example 1", () => {
    expect(stringToArray("Robin Singh")).toStrictEqual(["Robin", "Singh"]);
  });

  it("example 2", () => {
    expect(stringToArray("I love arrays they are my favorite")).toStrictEqual([
      "I",
      "love",
      "arrays",
      "they",
      "are",
      "my",
      "favorite",
    ]);
  });
});
