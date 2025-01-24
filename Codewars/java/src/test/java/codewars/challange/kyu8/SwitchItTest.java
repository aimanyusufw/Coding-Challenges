package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SwitchItTest {
    @Test
    public void basicTests() {
        assertEquals("One", SwitchIt.switchItUp(1));
        assertEquals("Three", SwitchIt.switchItUp(3));
        assertEquals("Five", SwitchIt.switchItUp(5));
    }
}
