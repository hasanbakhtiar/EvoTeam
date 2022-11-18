class Car {
    constructor(brand, model, year, newCar) {
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
        this.inewCar = newCar;
    }

    calculateSpeed(km,hour){
        return `${this.imodel} speed: ${km/hour} km/h`;
    }
}

export {Car}