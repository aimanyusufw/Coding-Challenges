import { checkCoupon } from "../../7-kyu/18-checkCoupon";

describe("solution", function () {
  it("Basic tests", function () {
    expect(
      checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")
    ).toBe(true);
    expect(
      checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")
    ).toBe(false);
  });
});
