// Take a sentence and then we want to target the first letter of it and capitalise it. '!' '?' '.' '...' 
// After that we need to add a full stop to it, in the case it doesn't exist.
// The output is the new sentence transformed.  -->

// 'hello, Sara, how are you'

// output should be: 'Hello, Sara, how are you.'

// if typeOf string AND 
// aString.toUpperCase().characterat[0]

// return aString



function capitalisedAndFinalised(aString) {
    const lookPonctuation = '!'
    
    if (typeof aString === 'string' && aString.includes('!') || aString.includes('.') || aString.includes('?') || aString.includes('...')) { 
        return aString.charAt().toUpperCase() + aString.slice(1)
    }
        else {
       return aString.charAt().toUpperCase() + aString.slice(1) + '.'
    }
}

console.log('Test function', capitalisedAndFinalised('Hello, Sara, how are you...'));