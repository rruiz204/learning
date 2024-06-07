public class Methods {
  public static void main(String[] args) {
    Methods obj = new Methods();

    obj.testing();

    thunder();

    int result = sum(10, 2);
    System.out.println(result);
  }

  // Method
  private void testing() {
    System.out.println("i am testing...");
  }

  // Static Method
  private static void thunder() {
    System.out.println("this is a static method");
  }

  // Method with Arguments
  private static int sum(int a, int b) {
    return a + b;
  }
}
