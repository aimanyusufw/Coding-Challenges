package codewars.challange.kyu8;

// Codewars 11
// Title :  Will there be enough space?
// Instructions :   If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Challange Url :  https://www.codewars.com/kata/5875b200d520904a04000003/java
// Level : 8kyu

public class Bob {
    // Method 1
    // public static int enough(int cap, int on, int wait) {
    // var passengers = on + wait;
    // int fit = 0;
    // if (passengers > cap) {
    // fit = passengers - cap;
    // }
    // return fit;
    // }

    // Method 2
    public static int enough(int cap, int on, int wait) {
        return (on + wait) > cap ? (on + wait) - cap : 0;
    }

    // Other User Method
    // static int enough(final int capacity, final int alreadyOn, final int waiting)
    // {
    // return Math.max(0, waiting + alreadyOn - capacity);
    // }
}
