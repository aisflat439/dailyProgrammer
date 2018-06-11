// Write a program that takes a string and outputs a skyline version of that string.

// `createSkyline('a man, a plan, a canal, panama')`

//     ```
// a
// a
// a
// a
// a
// a
// a  n
// a  n
// a mnp
// acmnp
// ```

const createSkyline = (stringval) => {
    let stringElements = {};
    let stringvalArray = stringval.split(' ').join('').split('').sort()
    
    stringvalArray.forEach((element, index) => {
        stringElements[element] = stringElements[element] !== undefined ? stringElements[element] + 1 : 1
    })

    let longestValue = 0;
    let width = 0;
    for (const letter in stringElements) {
        width += 1
        if (stringElements.hasOwnProperty(letter)) {
            const value = stringElements[letter];
            if (value > longestValue) {
                longestValue = value
            }
        }
    }

    console.log("width ", width);

    let prettified = ''
    let rowified = []
    for (const letter in stringElements) {
        if (stringElements.hasOwnProperty(letter)) {
            const value = stringElements[letter];
            for (let i = 0; i < value; i++) {
                prettified += letter
            }
            rowified.push(letter) 
        }
        prettified += '\n'
    }
    console.log("rowified ", rowified);
    console.log(prettified);
}

createSkyline('a man a plan a canal panama')