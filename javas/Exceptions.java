public class Exceptions {
  public static void main(String[] args) {
    try {
      int[] numbers = {1, 2, 3};
      System.out.println(numbers[4]);
    } catch (Exception error) {
      System.out.println(error.getMessage());
    }
  }  
}