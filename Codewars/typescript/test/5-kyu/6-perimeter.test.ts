import { perimeter } from "../../5-kyu/6-perimeter";

function testing(n: number, expected: number) {
  expect(perimeter(n)).toEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests perimeter", function () {
    testing(5, 80);
    testing(7, 216);
    testing(20, 114624);
    testing(30, 14098308);
  });
});
