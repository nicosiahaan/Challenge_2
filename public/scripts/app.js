class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
    this.loadButton = document.getElementById("load-btn");
    this.driverType = document.getElementById("driver-type");
    this.date = document.getElementById("datepicker-input");
    this.time = document.getElementById("picktime-input");
    this.passenger = document.getElementById("passenger");
  }

  async init() {
    await this.load();

    this.searchCars.onclick = this.run;
    this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-6", "listCars");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
