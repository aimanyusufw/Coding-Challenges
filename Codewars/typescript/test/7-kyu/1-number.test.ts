import { number } from "../../7-kyu/1-number";

describe("Testing 1-2-3", () => {
  it("Fixed tests", () => {
    expect(number([])).toStrictEqual([]);
    expect(number(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
    expect(number(["", "", "", "", ""])).toStrictEqual([
      "1: ",
      "2: ",
      "3: ",
      "4: ",
      "5: ",
    ]);
  });
});
