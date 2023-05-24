export const createCar = (carData, owner) => {
    const car = Object.assign(Object.assign({}, carData), { owner: owner });
    return car;
};
