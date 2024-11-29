import { revRot } from "../../6-kyu/19-revRot";

function testing(actual: string, expected: string) {
  expect(actual).toBe(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests revrot", function () {
    testing(revRot("1234", 0), "");
    testing(revRot("", 0), "");
    testing(revRot("1234", 5), "");
    let s = "733049910872815764";
    testing(revRot(s, 5), "330479108928157");
  });
});
