class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // function to return beep
    honk() {return 'Beep'}

    // function to return a string containing the vehicles information
    toString() {return `The vehicle is a ${this.make} ${this.model} from ${this.year}`}
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {return 'VROOM!!!'}
}

class Garage {
    constructor(cap) {
        this.capacity = cap;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) return 'Only vehicles are allowed in here!';
        if (this.vehicles.length === this.capacity) return "Sorry, we're full.";
        this.vehicles.push(vehicle);
        return 'Vehicle added!';
    }
}