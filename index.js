// Given Parameters
const calculationValues = {
  vel: 10000,  // velocity (km/h)
  acc: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  d: 0, // distance (km)
  fuel: 5000, // remaining fuel (kg)
  fbr: 0.5, // fuel burn rate (kg/s)

}
const calcNewVel = (vel, acc, time) => { //declared the calcNewVel and moved it above the calculation as it could not be accessed bofore initialization 
  return vel + (acc * time * 3.6 ) //to convert (m/s to km)
}
const d2 = calculationValues.d + (calculationValues.vel * calculationValues.time / 3600) //calcultes new distance in kms
const rf = calculationValues.fuel - (calculationValues.fbr * calculationValues.time )//calculates remaining fuel
const vel2 = calcNewVel(calculationValues.vel, calculationValues.acc, calculationValues.time) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






