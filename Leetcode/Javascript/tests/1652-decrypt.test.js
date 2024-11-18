import { decrypt } from "../src/1652-decrypt";

describe("Tests", () => {
  it("test", () => {
    expect(decrypt([5, 7, 1, 4], 3)).toStrictEqual([12, 10, 16, 13]);
    expect(decrypt([1, 2, 3, 4], 0)).toStrictEqual([0, 0, 0, 0]);
    expect(decrypt([2, 4, 9, 3], -2)).toStrictEqual([12, 5, 6, 13]);
    expect(decrypt([10, 8, 7, 7, 5, 3, 9, 6], 4)).toStrictEqual([
      27, 22, 24, 23, 28, 33, 31, 32,
    ]);
  });
});
