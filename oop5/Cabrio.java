package org.example;
public class Cabrio {
    private String name;
    private String brand;
    private boolean isMoving;
    private boolean isRoofOpen;

    public Cabrio(String name, String brand) {
        this.name = name;
        this.brand = brand;
        this.isMoving = false;
        this.isRoofOpen = false;
    }

    public String getName() {
        return name;
    }

    public String getBrand() {
        return brand;
    }

    public boolean isMoving() {
        return isMoving;
    }

    public boolean isRoofOpen() {
        return isRoofOpen;
    }

    public void startMoving() {
        this.isMoving = true;
    }

    public void stopMoving() {
        this.isMoving = false;
    }

    public void openRoof() {
        if (isMoving) {
            System.out.println("Error: Cannot open roof while car is in motion.");
            return;
        }
        this.isRoofOpen = true;
    }

    public void closeRoof() {
        if (isMoving) {
            System.out.println("Error: Cannot close roof while car is in motion.");
            return;
        }
        this.isRoofOpen = false;
    }

    public static void main(String[] args) {
        Cabrio car = new Cabrio("MX-5", "Mazda");
        System.out.println("Initial state: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.openRoof();
        System.out.println("Roof Opened: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.startMoving();
        System.out.println("Car started moving: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.closeRoof();
        System.out.println("Trying to close roof while moving: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.stopMoving();
        System.out.println("Car stopped moving: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.openRoof();
        System.out.println("Roof Opened: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());

        car.closeRoof();
        System.out.println("Roof closed: Moving: " + car.isMoving() + ", Roof Open: " + car.isRoofOpen());
    }
}