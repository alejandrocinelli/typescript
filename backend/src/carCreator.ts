interface Owner {
    fullName : string;
    phono : string;
}

export interface Car {
    model : string;
    year : number;
    brand : string;
    color : string;
    owner : Owner;
}

interface CarCreateData {
    model : string;
    year : number;
    brand : string;
    color : string;
}

export const createCar = (carData :CarCreateData , owner : Owner ) : Car => {

    const car : Car = { ...carData , owner : owner };
    return car;

}
