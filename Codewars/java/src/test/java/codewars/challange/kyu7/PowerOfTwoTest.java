package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PowerOfTwoTest {

    @Test
    void testPowerOfTwo() {
        assertEquals(true, PowerOfTwo.isPowerOfTwo(2));
        assertEquals(true, PowerOfTwo.isPowerOfTwo(4096));
    }

    @Test
    void testNotPowersOfTwo() {
        assertEquals(false, PowerOfTwo.isPowerOfTwo(333));
        assertEquals(false, PowerOfTwo.isPowerOfTwo(0));
    }
}
