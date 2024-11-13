import { noOdds } from "../../7-kyu/22-noOdds";

describe("Testing some inputs", function () {
  it("should return [0] for [0,1]", function () {
    expect(noOdds([0, 1])).toStrictEqual([0]);
  });
  it("should return [0,2] for [0,1,2,3]", function () {
    expect(noOdds([0, 1, 2, 3])).toStrictEqual([0, 2]);
  });
});
