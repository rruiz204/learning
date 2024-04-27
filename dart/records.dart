var firstRecord = (42, "Test", true);
var secondRecord = (name: "Router", age: 30);

(int, String, double) firstRecordTyped = (100, "Test", 3.14);
({String name, int age}) secondRecordTyped = (name: "Router", age: 30);


void main() {
  print(firstRecord.$1);
  print(firstRecord.$2);
  print(firstRecord.$3);

  print(secondRecord.name);
  print(secondRecord.age);
}