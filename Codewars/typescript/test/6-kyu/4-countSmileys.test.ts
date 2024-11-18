import { countSmileys } from "../../6-kyu/4-countSmileys";

describe("Basic testing", function () {
  it("examples", () => {
    expect(countSmileys([])).toBe(0);
    expect(countSmileys([":D", ":~)", ";~D", ":)"])).toBe(4);
    expect(countSmileys([":)", ":(", ":D", ":O", ":;"])).toBe(2);
    expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });
});
