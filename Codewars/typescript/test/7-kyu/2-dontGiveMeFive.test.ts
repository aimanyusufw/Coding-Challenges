import { dontGiveMeFive } from "../../7-kyu/2-dontGiveMeFive";

describe("KataTests", function () {
  it("exampleTests", function () {
    expect(dontGiveMeFive(1, 9)).toBe(8);
    expect(dontGiveMeFive(4, 17)).toBe(12);
  });
});
