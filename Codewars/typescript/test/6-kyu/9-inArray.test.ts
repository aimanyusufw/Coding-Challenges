import { inArray } from "../../6-kyu/9-inArray";

function testing(a1: string[], a2: string[], expected: string[]) {
  expect(inArray(a1, a2)).toStrictEqual(expected);
}

describe("Fixed Tests inArray", function () {
  it("Basic tests", function () {
    var a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];

    var a1: string[] = ["arp", "live", "strong"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["xyz", "live", "strong"];
    testing(a1, a2, ["live", "strong"]);
    a1 = ["live", "strong", "arp"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["live", "strong", "lyal", "lysh", "arp"];
    testing(a1, a2, ["arp", "live", "strong"]);
    a1 = ["tarp", "mice", "bull"];
    testing(a1, a2, []);
    a1 = [];
    testing(a1, a2, []);
  });
});
