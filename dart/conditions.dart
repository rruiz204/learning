void main() {
  int year = 2001;

  if (year % 2 == 0) {
    print("${year} Is an even year");
  } else {
    print("${year} Is an odd year");
  }


  int age = 19;
  int currentYear = 2024;

  String generation = (currentYear - age) >= 2013 ? "Alpha Gen" : "Z Gen";
  print(generation);
}