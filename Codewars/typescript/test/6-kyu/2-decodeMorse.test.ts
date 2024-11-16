import { decodeMorse } from "../../6-kyu/2-decodeMorse";

describe("Example from description", function () {
  it("HEY JUDE", () => {
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
  });
});
