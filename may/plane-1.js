// Write a program that takes a string and outputs a the zero based index of that string.

// `getZeroBasedIndex('phillydev')`

//     ```
// d 6
// e 7
// i 2
// l 3 4
// p 0
// v 5 
// y 8
// ```

const getZeroBasedIndex = (stringVal) => {
    let stringify = ''
    let stringzbi = {}
    stringVal.split('').sort().forEach((element, index) => {
        stringzbi[element] = stringzbi[element] !== undefined ? `${stringzbi[element]} ${index}` : stringzbi[element] = index
    }) 
    
    for (const item in stringzbi) {
        if (stringzbi.hasOwnProperty(item)) {
            const element = stringzbi[item]       
            stringify += `${item} ${element}\n`
        }
    }
    return stringify   
}

console.log(getZeroBasedIndex('phillydev'))