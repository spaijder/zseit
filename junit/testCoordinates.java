import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class testCoordinates {


    @Test
    public void testCoordinatesGreater100() {
        int x = 50;
        int y = 101;
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(x, y));
    }

    @Test
    public void testValid() {
        int x = 80;
        int y = 90;
        Coordinates coordinates = new Coordinates(x, y);
        assertEquals(x, coordinates.getX());
        assertEquals(y, coordinates.getY());
    }

    @Test
    public void testNotEquals() {
        Coordinates coordinates1 = new Coordinates(70, 80);
        Coordinates coordinates2 = new Coordinates(20, 50);
        assertFalse(coordinates1.equals(coordinates2));
    }

    @Test
    public void testNegative() {
        int x = -7;
        int y = 50;
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(x, y));
    }

    @Test
    public void testEquals() {
        Coordinates coordinates1 = new Coordinates(60, 90);
        Coordinates coordinates2 = new Coordinates(60, 90);
        assertTrue(coordinates1.equals(coordinates2));
    }

    @Test
    public void testCopy() {
        Coordinates originalCoordinates = new Coordinates(8, 20);
        int x = 90;
        int y = -6;
        Coordinates newCoordinates = Coordinates.copy(originalCoordinates, x, y);
        assertEquals(originalCoordinates.getX() + x, newCoordinates.getX());
        assertEquals(originalCoordinates.getY() + y, newCoordinates.getY());
    }

}