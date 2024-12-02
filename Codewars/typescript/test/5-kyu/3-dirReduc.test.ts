import { dirReduc } from "../../5-kyu/3-dirReduc";

describe("Fixed Tests", function () {
  it("dirReduc", function () {
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    ).toStrictEqual(["WEST"]);
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])
    ).toStrictEqual([]);
  });
});
