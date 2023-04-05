import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Wybierz:");
        System.out.println("1. Pole prostokąta");
        System.out.println("2. Sprawdzenie czy punkt znajduje się w okręgu");
        String Option = scanner.nextLine();
        if (Option.equals("Pole prostokąta") || Option.equals("1")){
            Rectangle rectangle = new Rectangle();
            rectangle.Rectangle();
        }
        else if (Option.equals("Sprawdzenie czy punkt znajduje się w okręgu") || Option.equals("2")){
            Circle circle = new Circle();
            circle.Circle();
        }
        else {
            System.out.println("Możesz tylko wybrać 1 lub 2.");
        }
    }
}