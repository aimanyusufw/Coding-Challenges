import { encryptThis } from "../../6-kyu/20-encryptThis";

describe("Fixed Tests", function () {
  it("should work with fixed tests", function () {
    expect(encryptThis("")).toBe("");
    expect(encryptThis("A")).toBe("65");
    expect(encryptThis("A wise old owl lived in an oak")).toBe(
      "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
    );
    expect(encryptThis("The more he saw the less he spoke")).toBe(
      "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
    );
    expect(encryptThis("The less he spoke the more he heard")).toBe(
      "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
    );
    expect(encryptThis("Why can we not all be like that wise old bird")).toBe(
      "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
    );
    expect(encryptThis("Thank you Piotr for all your help")).toBe(
      "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
    );
  });
});
