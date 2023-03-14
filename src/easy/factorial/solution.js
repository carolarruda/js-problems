// create an array of numbers 
// create a for loop or alternatively look at .forEach
// multiply each number by the next in descending order
// get total of this long multiplication


function factorial(anyNumber) {
    let multiply = 1
   for (let i = anyNumber; i >= 1; i--){
   multiply *= i
      }
   return(multiply)  
}
console.log('show me the factorial', factorial(10))
