import { greet } from "../../8-kyu/19-greet";

describe("Jenny's greeting function", function () {
  it("should greet some people normally", () => {
    expect(greet("Jim")).toBe("Hello, Jim!");
    expect(greet("Jane")).toBe("Hello, Jane!");
    expect(greet("Simon")).toBe("Hello, Simon!");
  });

  it("should greet Johnny a little bit more special", () => {
    expect(greet("Johnny")).toBe("Hello, my love!");
  });
});
