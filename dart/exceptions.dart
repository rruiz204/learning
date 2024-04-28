void verify(int age) {
  if (age < 18) throw Exception("ERR0R");
  else print("All good bro!");
}

void main() {
  try {
    verify(17);
  } catch (error) {
    print(error);
  }
}