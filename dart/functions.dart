// Functions with Parameters
int sum(int a, int b) {
  return a + b;
}

// Arrow Functions
int multiply(int a, int b) => a * b;

// Functions with Default Parameters
void greeting(String name, [String text = "Hello"]) {
  print("${text} ${name}");
}


void main() {
  int sumResult = sum(2, 3);
  print(sumResult);

  int multiplyResult = multiply(2, 10);
  print(multiplyResult);

  greeting("Root", "Good Morning");

  // Anonymous functions
  List<int> numbers = [1, 2, 3];
  numbers.forEach((number) {
    print(number * 2);
  });
}