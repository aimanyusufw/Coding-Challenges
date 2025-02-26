package codewars.challange.kyu6;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;    


public class DashatizeTest {
    @Test
    public void testBasic() {
        assertEquals("2-7-4", Dashatize.dashatize(274));
        assertEquals("5-3-1-1", Dashatize.dashatize(5311));
        assertEquals("86-3-20", Dashatize.dashatize(86320));
        assertEquals("9-7-4-3-02", Dashatize.dashatize(974302));
    }

    @Test
    public void testWeird() {
        assertEquals("0", Dashatize.dashatize(0));
        assertEquals("1", Dashatize.dashatize(-1));
        assertEquals("28-3-6-9", Dashatize.dashatize(-28369));
    }
    
    @Test
    public void testEdgeCases() {
        assertEquals("2-1-4-7-48-3-64-7", Dashatize.dashatize(Integer.MAX_VALUE));
        assertEquals("2-1-4-7-48-3-648", Dashatize.dashatize(Integer.MIN_VALUE));
        assertEquals("1-1-1-1-1-1-1-1-1-1", Dashatize.dashatize(-1111111111));
    }
}