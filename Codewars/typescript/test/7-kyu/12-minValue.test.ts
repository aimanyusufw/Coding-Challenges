import { minValue } from "../../7-kyu/12-minValue";

describe("minValue", () => {
  it("should return 13 when input is [1, 3, 1]", () => {
    const expected = 13;
    const actual = minValue([1, 3, 1]);

    expect(actual).toBe(expected);
  });

  it("should return 457 when input is [4, 7, 5, 7]", () => {
    const expected = 457;
    const actual = minValue([4, 7, 5, 7]);

    expect(actual).toBe(expected);
  });

  it("should return 148 when input is [4, 8, 1, 4]", () => {
    const expected = 148;
    const actual = minValue([4, 8, 1, 4]);

    expect(actual).toBe(expected);
  });

  it("should return 579 when input is [5, 7, 9, 5, 7]", () => {
    const expected = 579;
    const actual = minValue([5, 7, 9, 5, 7]);

    expect(actual).toBe(expected);
  });

  it("should return 678 when input is [6, 7, 8, 7, 6, 6]", () => {
    const expected = 678;
    const actual = minValue([6, 7, 8, 7, 6, 6]);

    expect(actual).toBe(expected);
  });

  it("should return 45679 when input is [5, 6, 9, 9, 7, 6, 4]", () => {
    const expected = 45679;
    const actual = minValue([5, 6, 9, 9, 7, 6, 4]);

    expect(actual).toBe(expected);
  });

  it("should return 134679 when input is [1, 9, 1, 3, 7, 4, 6, 6, 7]", () => {
    const expected = 134679;
    const actual = minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]);

    expect(actual).toBe(expected);
  });

  it("should return 356789 when input is [3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]", () => {
    const expected = 356789;
    const actual = minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]);

    expect(actual).toBe(expected);
  });
});
