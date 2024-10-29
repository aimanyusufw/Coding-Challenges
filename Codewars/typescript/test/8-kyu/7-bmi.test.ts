import { bmi } from "../../8-kyu/7-bmi";

describe("Kata.bmi", () => {
  it("should pass a sample test according to the specifications provided", () => {
    expect(bmi(50, 1.8)).toBe("Underweight");
    expect(bmi(80, 1.8)).toBe("Normal");
    expect(bmi(90, 1.8)).toBe("Overweight");
    expect(bmi(100, 1.8)).toBe("Obese");
  });
});
