// assign an anonymous function, return the first two drivers
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

/// assign an anonymous function, return the last two drivers
const returnLastTwoDrivers = drivers => drivers.slice(-2);

// declare an array containing two elements: the two functions that we previously define
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// This is a higher-order function that takes in one argument
function createFareMultiplier(fareMultiplier) {
    // return a function that takes in a fare as an argument and multiply the fare with the fareMultiplier
    return function(fare) {
        return fareMultiplier * fare;
    };
}
// This is an arrow function, I don't know if it can be a higher-order function as the requirement of the assignment
// or not, so I don't use it
// const createFareMultiplier = fareMultiplier => fare => fareMultiplier * fare;

// Declare a variable with const and assign a function returned by createFareMultiplier() to it, then double fare
const fareDoubler = createFareMultiplier(2);

// Declare a variable with const and assign a function returned by createFareMultiplier() to it, then triple fare
const fareTripler = createFareMultiplier(3);

// This function takes two arguments, an array of the names of Scuber's drivers 
// and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function
const selectDifferentDrivers = (drivers, selectingDrivers) => {
    // Based on these two arguments, 
    // selectDifferentDrivers() will return either the first two drivers or the last two drivers.
    switch (selectingDrivers) {
        case returnFirstTwoDrivers:
            return drivers.slice(0, 2);
        case returnLastTwoDrivers:
            return drivers.slice(-2);
    }
}


