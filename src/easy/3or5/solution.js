// <!-- List of numbers from 0 to 1000
// we need the ones that are multiples of 3 and 5
// After getting those we need the total from that list of multiples -->

// Create an Array called numbersArray = []
// After that we need to loop up to 1000 and push those values to my new Array

// for ( i = 0; i < 1000)
// to get the new array

// if number % 3 === 0 || number % 5 === 0
// sum += sum[i]
// return sum

function giveMultiplesOfThreeAndFive(aNumber) {
    
    // let newArray = []
    let sum = 0
    for (let i = 0; i < aNumber; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
    sum += i
}
    }
    return sum
}

console.log('Multiples of 3 and 5 bellow 1000', giveMultiplesOfThreeAndFive(1000));