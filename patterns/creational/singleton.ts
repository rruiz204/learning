class Singleton {
  private static instante: Singleton;

  private constructor() {};

  public static getInstance(): Singleton {
    if (!Singleton.instante) {
      Singleton.instante = new Singleton();
    }
    return Singleton.instante;
  }

  public someMethod(): void {
    console.log("This is some method");
  }
}


const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 == singleton2);