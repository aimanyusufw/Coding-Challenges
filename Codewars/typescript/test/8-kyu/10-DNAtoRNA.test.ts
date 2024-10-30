import { DNAtoRNA } from "../../8-kyu/10-DNAtoRNA";

describe("Sample Test Cases", function () {
  it("Should return a string", function () {
    expect(DNAtoRNA("TTTT")).toBe("UUUU");
    expect(DNAtoRNA("GCAT")).toBe("GCAU");
    expect(DNAtoRNA("GACCGCCGCC")).toBe("GACCGCCGCC");
  });
});
