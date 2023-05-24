import { createCar } from "./carCreator.js";
const cars = [];
cars.push(createCar({ model: "A3", year: 2020, brand: "Audi", color: "Black" }, { fullName: "John Doe", phono: "123456789" }));
cars.push(createCar({ model: "A4", year: 2020, brand: "Audi", color: "White" }, { fullName: "John Doe", phono: "123456789" }));
console.log("----Bienvenido a la concesionaria----");
console.log("----Estos son los autos disponibles----");
cars.map((car) => {
    console.log(`
         --------------------
         Modelo: ${car.model} 
         Marca: ${car.brand} 
         Color: ${car.color} 
         Año: ${car.year} 
         Datos del Propietario: 
         Dueño: ${car.owner.fullName} 
         Telefono: ${car.owner.phono}
         --------------------
         `);
});
