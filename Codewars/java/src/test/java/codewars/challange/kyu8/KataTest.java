package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class KataTest {
    @Test
    public void BasicTests() {
        assertEquals(16, Kata.sum(new int[] { 6, 2, 1, 8, 10 }));
    }
}
