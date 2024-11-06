// Codewars 3
// Title :  Count the digit
// Question :   Implement the function taking n and d as parameters and returning this count.
// Challange Url :  https://www.codewars.com/kata/566fc12495810954b1000030
// Level : 7kyu

export class G964 {
  // Method : 1
  public static nbDig(n: number, d: number): number {
    const array = Array.from({ length: n + 1 }, (_, i) =>
      (i ** 2).toString()
    ).join("");
    let dAppear = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == d.toString()) {
        dAppear++;
      }
    }
    return dAppear;
  }

  // Method : 2
  public static nbDig2 = (n: number, d: number) =>
    Array.from({ length: n + 1 }, (_, i) => (i ** 2).toString())
      .join("")
      .split(d.toString()).length - 1;

  // Other Users Method
  public static nbDig3(n: number, d: number) {
    let contador = 0;

    Array.from({ length: n + 1 }, (v, i) => i)
      .map((e) => Math.pow(e, 2))
      .forEach((e) => (contador += String(e).split(String(d)).length - 1));

    return contador;
  }
}
