interface IObserver {
  update(tempeture: number): void;
}

class Observer implements IObserver {
  update(tempeture: number): void {
    console.log(`The actual tempeture is: ${tempeture}°C`);
  }
}

const observer = new Observer();

class WeatherStation {
  private observers: IObserver[] = [observer];
  private tempeture: number = 0;

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.tempeture);
    }
  }

  updateTempeture(newTempeture: number): void {
    this.tempeture = newTempeture;
    this.notifyObservers();
  }
}


const weatherStation = new WeatherStation();
weatherStation.updateTempeture(25);
weatherStation.updateTempeture(30);