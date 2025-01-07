import { loop_size } from "../../5-Kyu/5-loop_size";

class Node {
  constructor() {
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}

describe("sample tests", function () {
  it("should work for some small lists", function () {
    {
      const A = new Node();
      A.setNext(A);
      expect(loop_size(A)).toEqual(1);
    }
    {
      const A = new Node(),
        B = new Node();
      A.setNext(B), B.setNext(A);
      expect(loop_size(A)).toEqual(2);
    }
    {
      const A = new Node(),
        B = new Node();
      A.setNext(B), B.setNext(B);
      expect(loop_size(A)).toEqual(1);
    }
    {
      const A = new Node(),
        B = new Node(),
        C = new Node();
      A.setNext(B), B.setNext(C), C.setNext(C);
      expect(loop_size(A)).toEqual(1);
    }
    {
      const A = new Node(),
        B = new Node(),
        C = new Node();
      A.setNext(B), B.setNext(C), C.setNext(B);
      expect(loop_size(A)).toEqual(2);
    }
    {
      const A = new Node(),
        B = new Node(),
        C = new Node();
      A.setNext(B), B.setNext(C), C.setNext(A);
      expect(loop_size(A)).toEqual(3);
    }
  });
});
