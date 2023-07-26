// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)

const returnLastTwoDrivers = drivers => drivers.slice(2, 4)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = integer => {
    return function (fare){
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2

const fareTripler = createFareMultiplier => createFareMultiplier * 3

function selectDifferentDrivers(drivers, driversToReturn){
    return driversToReturn(drivers)
}

