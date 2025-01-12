package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class GreetTest {
    @Test
    public void basicTests() {
        assertEquals("Hello boss", Greet.greet("Daniel", "Daniel"));
        assertEquals("Hello guest", Greet.greet("Greg", "Daniel"));
    }
}
