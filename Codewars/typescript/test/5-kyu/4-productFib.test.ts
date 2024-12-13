import { productFib } from "../../5-kyu/4-productFib";

function dotest(prod: number, expected: [number, number, boolean]) {
  expect(productFib(prod)).toStrictEqual(expected);
}

describe("Fixed Tests", function () {
  it("productFib", function () {
    dotest(4895, [55, 89, true]);
    dotest(5895, [89, 144, false]);
    dotest(74049690, [6765, 10946, true]);
    dotest(84049690, [10946, 17711, false]);
    dotest(193864606, [10946, 17711, true]);
    dotest(447577, [610, 987, false]);
    dotest(602070, [610, 987, true]);
  });
});
