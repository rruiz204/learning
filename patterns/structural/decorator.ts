interface Shape {
  draw(): void
}

class Rectangle implements Shape {
  draw(): void {
    console.log("Drawing a Rectangle");   
  }
}

class Circle implements Shape {
  draw(): void {
    console.log("Drawing a Circle");
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log("Drawing a Triangle");
  }
}


class Decorator {
  constructor(
    private shape: Shape
  ) {}

  public decorate(): void {
    console.log("Start Decorator");
    this.shape.draw();
    console.log("End Decorator");
  }
}


const decorated = new Decorator(new Circle());
decorated.decorate();