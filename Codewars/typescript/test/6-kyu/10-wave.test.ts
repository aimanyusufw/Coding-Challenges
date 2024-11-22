import { wave } from "../../6-kyu/10-wave";

let result: string[];
const letters = "abcd efghi jklmno pqrstu vwxyz".split("");

describe("Sample Tests", function () {
  it("Should pass sample tests", function () {
    result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    expect(wave("hello")).toStrictEqual(result);
    result = [
      "Codewars",
      "cOdewars",
      "coDewars",
      "codEwars",
      "codeWars",
      "codewArs",
      "codewaRs",
      "codewarS",
    ];
    expect(wave("codewars")).toStrictEqual(result);

    result = [];
    expect(wave("")).toStrictEqual(result);

    result = [
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS",
    ];
    expect(wave("two words")).toStrictEqual(result);

    result = [" Gap ", " gAp ", " gaP "];
    expect(wave(" gap ")).toStrictEqual(result);
  });
});
