class Student {
  String name;
  int age;
  List<String> subjects;
  Map<String, double> ratings;

  Student(this.name, this.age)
      : subjects = ["Science", "Languages"],
        ratings = {
          "Science": 90.0,
          "Languages": 87.9,
        };

  void display() {
    for (final subject in this.subjects) {
      print("${subject}: ${ratings[subject]}");
    }
  }
}

void main() {
  Student root = Student("Root", 19);
  root.display();
}