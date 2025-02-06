package codewars.challange.kyu7;

import java.util.Map;

// Codewars 9
// Title :  Alphabet war
// Instructions :  Write a function that accepts fight string consists of only small letters and return who wins the fight.
// Challange Url : https://www.codewars.com/kata/59377c53e66267c8f6000027/train/java
// Level : 7kyu

public class Alphabet {
    // Method 1
    public static String alphabetWar(String fight) {
        Map<String, Integer> leftSide = Map.of("w", 4, "p", 3, "b", 2, "s", 1);
        Map<String, Integer> rightSide = Map.of("m", 4, "q", 3, "d", 2, "z", 1);
        int res = 0;
        for (var fighter : fight.toCharArray()) {
            String letter = String.valueOf(fighter);
            if (leftSide.containsKey(letter)) {
                res -= leftSide.get(letter);
            } else if (rightSide.containsKey(letter)) {
                res += rightSide.get(letter);
            }
        }
        return res > 0 ? "Right side wins!" : res < 0 ? "Left side wins!" : "Let's fight again!";
    }

    // Method 2

    // Other User Method
    // public static String alphabetWar(String fight){
    // int right = 0, left = 0;
    // for (char c : fight.toCharArray()) {
    // switch (c) {
    // case 'w' : left += 4; break;
    // case 'p' : left += 3; break;
    // case 'b' : left += 2; break;
    // case 's' : left += 1; break;

    // case 'm' : right += 4; break;
    // case 'q' : right += 3; break;
    // case 'd' : right += 2; break;
    // case 'z' : right += 1; break;
    // }
    // }
    // if (left == right) return "Let's fight again!";
    // return (left > right ? "Left" : "Right") + " side wins!";
    // }
}
