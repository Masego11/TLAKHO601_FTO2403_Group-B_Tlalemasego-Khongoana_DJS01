// Given Parameters
const calculationValues = {
  velocity: 10000,  // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  distance: 0, // distance (km)
  fuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5, // fuel burn rate (kg/s)

}
const calcNewVel = (velocity, acceleration, time) => { //declared the calcNewVel and moved it above the calculation as it could not be accessed bofore initialization 
  return velocity + (acceleration * time * 3.6 ) //to convert (m/s to km)
}
const distance2 = calculationValues.distance + (calculationValues.velocity * calculationValues.time / 3600) //calcultes new distance in kms
const remainingFuel = calculationValues.fuel - (calculationValues.fuelBurnRate * calculationValues.time )//calculates remaining fuel
const velocity2 = calcNewVel(calculationValues.velocity, calculationValues.acceleration, calculationValues.time) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${velocity2} km/h`);
console.log(`Corrected New Distance: ${distance2} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






