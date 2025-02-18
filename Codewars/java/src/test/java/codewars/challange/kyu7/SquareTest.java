package codewars.challange.kyu7;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;


public class SquareTest  {
    
    @Test
    public void exampleTests() {
        assertEquals("+++\n+++\n+++", Square.generateShape(3));
        assertEquals("+++++\n+++++\n+++++\n+++++\n+++++", Square.generateShape(5));
        assertEquals("++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++", Square.generateShape(8));
    }
}
