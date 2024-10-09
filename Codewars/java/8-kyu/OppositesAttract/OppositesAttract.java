// Codewars 3
// Title : Opposites Attract
// Question : Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// Challange Url : https://www.codewars.com/kata/555086d53eac039a2a000083
// Level : 8kyu

public class OppositesAttract {

    // method 1
    public static boolean isLove(final int flower1, final int flower2) {
        Integer isFlower1Odd = flower1 % 2;
        Integer isFlower2Odd = flower2 % 2;

        // Cek apakah satu bunga genap dan satu bunga ganjil
        return (isFlower1Odd == 0 && isFlower2Odd != 0) || (isFlower1Odd != 0 && isFlower2Odd == 0);
    }

    // Log and debug
    public static void main(String[] args) {
        System.out.println(isLove(1, 4)); // True: 1 ganjil, 4 genap
        System.out.println(isLove(2, 2)); // False: Kedua bunga genap
        System.out.println(isLove(1, 1)); // False: Kedua bunga ganjil
        System.out.println(isLove(0, 1)); // True: 0 genap, 1 ganjil
    }
}
