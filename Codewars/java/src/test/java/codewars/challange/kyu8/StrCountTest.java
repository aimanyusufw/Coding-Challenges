package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class StrCountTest {
    @Test
    public void testSomething() {
        assertEquals(1, StrCount.strCount("Hello", 'o'));
        assertEquals(2, StrCount.strCount("Hello", 'l'));
        assertEquals(0, StrCount.strCount("", 'z'));
    }
}
