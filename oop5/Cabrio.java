/**

A class representing a Cabrio car with a name, brand, roof state and move.
*/
package org.example;
public class Cabrio {
    private String name; // name of the car
    private String brand; // brand of the car
    private boolean isMoving; // current moving state of the car
    private boolean isRoofOpen; // current state of the roof
    /**
 * Constructs a new Cabrio car with the given name and brand.
 */
public Cabrio(String name, String brand) {
    this.name = name;
    this.brand = brand;
    this.isMoving = false;
    this.isRoofOpen = false;
}

/**
 * Returns the name of the car.
 */
public String getName() {
    return name;
}

/**
 * Returns the brand of the car.
 * @return the brand of the car
 */
public String getBrand() {
    return brand;
}

/**
 * Returns the current moving state of the car.
 * @return true if the car is moving, false otherwise
 */
public boolean isMoving() {
    return isMoving;
}

/**
 * Returns the current state of the roof.
 * @return true if the roof is open, otherwise false
 */
public boolean isRoofOpen() {
    return isRoofOpen;
}

/**
 * Starts the car's movement.
 */
public void startMoving() {
    this.isMoving = true;
}

/**
 * Stops the car's movement.
 */
public void stopMoving() {
    this.isMoving = false;
}

/**
 * Opens the car's roof.
 * Cannot be done while the car is in motion.
 */
public void openRoof() {
    if (isMoving) {
        System.out.println("Error: Cannot open roof while car is in motion.");
        return;
    }
    this.isRoofOpen = true;
}

/**
 * Closes the car's roof.
 * Cannot be done while the car is in motion.
 */
public void closeRoof() {
    if (isMoving) {
        System.out.println("Error: Cannot close roof while car is in motion.");
        return;
    }
    this.isRoofOpen = false;
}

/**
 * The main method used to test the Cabrio class.
 * Creates a new Cabrio car, opens and closes the roof, starts and stops the car's movement.
 */
public static void main(String[] args) {
    Cabrio car = new Cabrio("MX-5", "Mazda");
    System.out.println("Initial state: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

    car.openRoof();
    System.out.println("Roof Opened: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

    car.stopMoving();
    System.out.println("Car stopped moving: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

    car.openRoof();
    System.out.println("Roof Opened: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

    car.closeRoof();
    System.out.println("Roof closed: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());
    }
}
