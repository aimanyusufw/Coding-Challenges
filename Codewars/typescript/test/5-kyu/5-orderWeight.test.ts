import { orderWeight } from "../../5-kyu/5-orderWeight";

describe("Fixed Tests", function () {
  it("orderWeight", function () {
    expect(orderWeight("103 123 4444 99 2000")).toEqual("2000 103 123 4444 99");
    expect(
      orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
    ).toEqual("11 11 2000 10003 22 123 1234000 44444444 9999");
  });
});
