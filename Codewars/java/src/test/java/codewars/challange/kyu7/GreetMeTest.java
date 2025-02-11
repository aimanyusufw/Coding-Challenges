package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class GreetMeTest {
    @Test
    public void basicTest() {
        assertEquals("Hello Riley!", GreetMe.greet("riley"));
    }
}
