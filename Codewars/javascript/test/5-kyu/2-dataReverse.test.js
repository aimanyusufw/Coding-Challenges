import { dataReverse } from "../../5-Kyu/2-dataReverse";

describe("Data Reverse", function () {
  it("Example Tests", function () {
    const data1 = [
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 0, 1, 0,
    ];
    const data2 = [
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1,
    ];
    expect(dataReverse(data1)).toStrictEqual(data2);
    const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
    const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
    expect(dataReverse(data3)).toStrictEqual(data4);
  });
});
