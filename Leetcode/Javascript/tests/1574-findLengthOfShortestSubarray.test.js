import { findLengthOfShortestSubarray } from "../src/1574-findLengthOfShortestSubarray";

describe("Tests", () => {
  it("test", () => {
    expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])).toBe(3);
    expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1])).toBe(4);
    expect(findLengthOfShortestSubarray([1, 2, 3])).toBe(0);
  });
});
