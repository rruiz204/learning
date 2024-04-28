class SupClass {
  String superArg;

  SupClass(this.superArg);

  void supMethod() {
    print("Super Method");
  }
}

class SubClass extends SupClass {
  String subArg;

  SubClass(String superArg, this.subArg) : super(superArg);

  @override
  void supMethod() {
    print("Override Super Method");
  }

  void useSuper() {
    super.supMethod();
  }

  void subMethod() {
    print("Sub Method");
  }
}

void main() {
  SubClass object = SubClass("Super 123", "Sub 456");
  
  object.supMethod();
  object.useSuper();
  object.subMethod();

  print(object.superArg);
  print(object.subArg);
}