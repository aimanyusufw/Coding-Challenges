import { mxdiflg } from "../../7-kyu/21-mxdiflg";

describe("Fixed Tests", function () {
  it("Basic tests mxdiflg", function () {
    let s1 = [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ];
    let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    expect(mxdiflg(s1, s2)).toBe(13);
    s1 = [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ];
    s2 = ["bbbaaayddqbbrrrv"];
    expect(mxdiflg(s1, s2)).toBe(10);
    s2 = [];
    s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    expect(mxdiflg(s1, s2)).toBe(-1);
  });
});
