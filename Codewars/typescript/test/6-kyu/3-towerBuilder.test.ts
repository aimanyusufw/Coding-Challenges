import { towerBuilder } from "../../6-kyu/3-towerBuilder";

describe("towerBuilder", function () {
  it("Basic Test", function () {
    expect(towerBuilder(1)).toStrictEqual(["*"]);
    expect(towerBuilder(2)).toStrictEqual([" * ", "***"]);
    expect(towerBuilder(3)).toStrictEqual(["  *  ", " *** ", "*****"]);
  });
});
