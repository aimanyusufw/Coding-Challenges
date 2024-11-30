import { pigIt } from "../../6-kyu/21-pigIt";

describe("Tests", () => {
  it("test", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
});
