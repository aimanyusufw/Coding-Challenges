import { multiplicationTable } from "../../6-kyu/16-multiplicationTable";

describe("Example Tests", () => {
  it("should work work with example tests", () => {
    expect(multiplicationTable(1)).toStrictEqual([[1]]);
    expect(multiplicationTable(2)).toStrictEqual([
      [1, 2],
      [2, 4],
    ]);
    expect(multiplicationTable(3)).toStrictEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ]);
  });
});
