import { capitalize } from "../../7-kyu/13-capitalize";

describe("Basic tests", function () {
  it("Testing for abcdef", () =>
    expect(capitalize("abcdef")).toStrictEqual(["AbCdEf", "aBcDeF"]));
  it("Testing for codewars", () =>
    expect(capitalize("codewars")).toStrictEqual(["CoDeWaRs", "cOdEwArS"]));
  it("Testing for abracadabra", () =>
    expect(capitalize("abracadabra")).toStrictEqual([
      "AbRaCaDaBrA",
      "aBrAcAdAbRa",
    ]));
  it("Testing for codewarriors", () =>
    expect(capitalize("codewarriors")).toStrictEqual([
      "CoDeWaRrIoRs",
      "cOdEwArRiOrS",
    ]));
  it("Testing for indexinglessons", () =>
    expect(capitalize("indexinglessons")).toStrictEqual([
      "InDeXiNgLeSsOnS",
      "iNdExInGlEsSoNs",
    ]));
  it("Testing for codingisafunactivity", () =>
    expect(capitalize("codingisafunactivity")).toStrictEqual([
      "CoDiNgIsAfUnAcTiViTy",
      "cOdInGiSaFuNaCtIvItY",
    ]));
});
