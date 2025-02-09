package codewars.challange.kyu7;

// Codewars 12
// Title :  Bumps in the Road
// Instructions :  Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Challange Url :  https://www.codewars.com/kata/57ed30dde7728215300005fa/train/java
// Level : 7kyu

public class BumpsTheRoad {
    // Method 1
    // public static String bumps(final String road) {
    // int bump = 0;
    // for (char step : road.toCharArray()) {
    // if (step == 'n') {
    // bump++;
    // }
    // }
    // return bump > 15 ? "Car Dead" : "Woohoo!";
    // }

    // Method 2
    public static String bumps(final String road) {
        return road.chars().filter(ch -> ch == 'n').count() > 15 ? "Car Dead" : "Woohoo!";
    }

    // Other User Method
    // public static String bumps(final String road) {
    // int count=0;
    // for (int i = 0; i < road.length(); i++) {
    // if (road.charAt(i) =='n')
    // count++;
    // }
    // if (count <= 15)
    // return "Woohoo!";
    // else
    // return "Car Dead";
    // }
}
