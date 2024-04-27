void main() {
  for (int index = 0; index < 10; index++) {
    print("Hello ${index+1}!");
  }

  List<String> letters = ["A", "B", "C", "D"];
  for (final letter in letters) {
    print("The letter is: ${letter}");
  }
}