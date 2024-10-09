// A function that calculates the total electricity bill for a household in Kampala
function calculateElectricityBill(unitsConsumed) {
    const ratePerUnit = 500; // Uganda shillings per unit
    return unitsConsumed * ratePerUnit;
}

// example where it is used:
const units = 100; // example: 100 units consumed
const totalBill = calculateElectricityBill(units);
console.log(`Total electricity bill: UGX ${totalBill}`);





//A function to determine if a Ugandan year is a leap year

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// example:
const year = 2024;
const leapYearStatus = isLeapYear(year);
console.log(`${year} is a leap year: ${leapYearStatus}`);


//a function that calculates the total boda-boda fare for a journey between two ugandan towns
//based on distance per kilometer
function calculateBodaBodaFare(distance, ratePerKilometer) {
    return distance * ratePerKilometer;
}

// Example usage:
const distanceInKilometers = 50; // example: 50 kilometers between two towns
const ratePerKilometer = 2000; // example rate: UGX 2000 per kilometer
const totalFare = calculateBodaBodaFare(distanceInKilometers, ratePerKilometer);
console.log(`Total boda-boda fare: UGX ${totalFare}`);
