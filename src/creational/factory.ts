export enum TransportType {
  Truck = "truck",
  Ship = "ship",
}

interface ITransportFactory {
  createTransport(type: TransportType, number: string): void;
}

interface Transport {
  number: string;
  transport(): void;
}

export class TransportCreator implements ITransportFactory {
  createTransport(type: TransportType, number: string) {
    switch (type) {
      case TransportType.Truck: {
        return new Truck(number);
      }
      case TransportType.Ship: {
        return new Ship(number);
      }
      default:
        console.error("You should choose the type");
    }
  }
}

class Truck implements Transport {
  number: string;

  constructor(number: string) {
    this.number = number;
  }

  transport() {
    console.log("Transport Truck №" + this.number);
  }
}

class Ship implements Transport {
  number: string;

  constructor(number: string) {
    this.number = number;
  }

  transport() {
    console.log("Transport Ship №" + this.number);
  }
}
