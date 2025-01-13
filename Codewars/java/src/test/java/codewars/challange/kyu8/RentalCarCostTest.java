package codewars.challange.kyu8;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class RentalCarCostTest {
    @Test
    public void under3Tests() {
        assertEquals(40, RentalCarCost.rentalCarCost(1));
        assertEquals(80, RentalCarCost.rentalCarCost(2));
    }

    @Test
    public void under7Tests() {
        assertEquals(100, RentalCarCost.rentalCarCost(3));
        assertEquals(140, RentalCarCost.rentalCarCost(4));
        assertEquals(180, RentalCarCost.rentalCarCost(5));
        assertEquals(220, RentalCarCost.rentalCarCost(6));
    }

    @Test
    public void over7Tests() {
        assertEquals(230, RentalCarCost.rentalCarCost(7));
        assertEquals(270, RentalCarCost.rentalCarCost(8));
        assertEquals(310, RentalCarCost.rentalCarCost(9));
        assertEquals(350, RentalCarCost.rentalCarCost(10));
    }
}
