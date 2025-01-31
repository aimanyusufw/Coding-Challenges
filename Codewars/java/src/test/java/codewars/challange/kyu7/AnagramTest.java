package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class AnagramTest {
    private static void doTest(String a, String b, boolean expected) {
        String message = String.format("a = \"%s\"\nb = \"%s\"\n", a, b);
        boolean actual = Anagram.isAnagram(a, b);
        assertEquals(expected, actual, message);
    }

    @Test
    void sampleTests() {
        doTest("", "", true);
        doTest("ab", "cdcd", false);
        doTest("ac", "bb", false);
        doTest("aab", "abb", false);
        doTest("a", "aaa", false);
        doTest("foefet", "toffee", true);
        doTest("Buckethead", "DeathCubeK", true);
        doTest("Twoo", "Woot", true);
        doTest("dumble", "bumble", false);
        doTest("ound", "round", false);
        doTest("apple", "pale", false);
    }
}
