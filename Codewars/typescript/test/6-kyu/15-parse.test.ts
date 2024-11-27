import { parse } from "../../6-kyu/15-parse";

describe("example", function () {
  it("test", function () {
    expect(parse("iiisdoso")).toStrictEqual([8, 64]);
    expect(parse("iiisxxxdoso")).toStrictEqual([8, 64]);
  });
});
