package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class BobTest {
    @Test
    public void testBob() {
        assertEquals(0, Bob.enough(10, 5, 5));
        assertEquals(10, Bob.enough(100, 60, 50));
        assertEquals(0, Bob.enough(20, 5, 5));
    }
}
