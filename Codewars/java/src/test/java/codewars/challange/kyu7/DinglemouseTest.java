package codewars.challange.kyu7;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class DinglemouseTest {
    @Test
    public void test() {
        assertEquals("Clint Eastwood", new Dinglemouse("Clint", "Eastwood").getFullName());
    }

}
