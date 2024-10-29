import { fakeBin } from "../../8-kyu/4-fakeBin";

describe("Example tests", function () {
  it("should work for simple cases", function () {
    expect(fakeBin("45385593107843568")).toBe("01011110001100111");
    expect(fakeBin("509321967506747")).toBe("101000111101101");
    expect(fakeBin("366058562030849490134388085")).toBe(
      "011011110000101010000011011"
    );
  });
});
