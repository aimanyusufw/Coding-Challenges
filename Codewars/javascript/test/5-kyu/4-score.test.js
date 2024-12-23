import { score } from "../../5-Kyu/4-score";

describe("Scorer Function", function () {
  it("should value this as worthless", function () {
    expect(score([2, 3, 4, 6, 2])).toEqual(0);
  });

  it("should value this triplet correctly", function () {
    expect(score([4, 4, 4, 3, 3])).toEqual(400);
  });

  it("should value this mixed set correctly", function () {
    expect(score([2, 4, 4, 5, 4])).toEqual(450);
  });
});
