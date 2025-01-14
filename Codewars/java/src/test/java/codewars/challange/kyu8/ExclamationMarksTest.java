package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ExclamationMarksTest {
    @Test
    public void testSimpleString1() {
        assertEquals("Hello World", ExclamationMarks.removeExclamationMarks("Hello World!"));
    }
}
