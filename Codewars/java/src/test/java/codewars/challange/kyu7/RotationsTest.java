package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

public class RotationsTest {
    private static void testing(Boolean actual, Boolean expected) {
        assertEquals(expected, actual);
    }

    @Test
    public void test() {
        System.out.println("Fixed Tests containAllRots");
        testing(Rotations.containAllRots("", Arrays.asList()), true);
        List<String> a = Arrays.asList("bsjq", "qbsj");
        testing(Rotations.containAllRots("", a), true);
        a = Arrays.asList("bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs");
        testing(Rotations.containAllRots("bsjq", a), true);
        a = Arrays.asList("TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR",
                "ABhRXjY");
        testing(Rotations.containAllRots("XjYABhR", a), false);
    }
}
