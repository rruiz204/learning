public class Classes {
  int integer;

  // Constructor
  public Classes(int number) {
    integer = number;
  }

  public static void main(String[] args) {
    Classes test = new Classes(100);

    System.out.println("The number is: " + test.integer);
  }
}
