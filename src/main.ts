import { TransportType, TransportCreator } from "./creational/factory";

// Factory
console.log("%cFactory", "color:violet; font-weight:bold; font-size:16px");
const factory = new TransportCreator();
const truck = factory.createTransport(TransportType.Truck, "BH7514MB");
const ship = factory.createTransport(TransportType.Ship, "Maryna2205");
truck?.transport();
ship?.transport();
