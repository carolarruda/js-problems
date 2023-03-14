// create a function with an argument 
// that takes the number and then using the .tostring method, converts the number into a string
// using .length function we can deduce the number of digits
// we then want to see the result

function numberOfDigits(aNumber) {
    aNumber = aNumber.toString().length
    console.log('test', aNumber)
    return (aNumber)
}
console.log('test2', numberOfDigits(221726))
