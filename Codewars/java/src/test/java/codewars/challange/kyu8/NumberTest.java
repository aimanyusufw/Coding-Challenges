package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class NumberTest {
    private Number num = new Number(); // Inisialisasi langsung

    @Test
    public void testIsEven() {
        assertEquals(true, num.isEven(0)); // 0 is even
        assertEquals(false, num.isEven(0.5)); // 0.5 is not an integer
        assertEquals(false, num.isEven(1)); // 1 is odd
        assertEquals(true, num.isEven(2)); // 2 is even
        assertEquals(true, num.isEven(-4)); // -4 is even
    }
}
