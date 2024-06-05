public class Conditions {
  public static void main(String[] args) {
    final int age = 13;

    final boolean maybe = age >= 18;

    if (maybe) {
      System.out.println("You are authorized!");
    } else {
      System.out.println("You are not authorized!");
    }
  }
}
