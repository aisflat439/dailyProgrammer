function findSingleTargetWeight(neededWeight, weightsArray) {
    let targetWeight = weightsArray.filter(value => value === neededWeight)
    return targetWeight[0]
}

function scaleBalance(scaleArray, weightsArray) {
    const targetNumber = Math.max(...scaleArray) - Math.min(...scaleArray)
    let theTargetWeight = findSingleTargetWeight(targetNumber, weightsArray)

    // handle all cases where there is just one number
    if (theTargetWeight) {
        return theTargetWeight
    } 

    // handle all the cases where the weight is one sides values
    for (let i = 0; i < weightsArray.length; i++) {
        for (let k = 0; k < weightsArray.length; k++) {
            if (weightsArray[i] + weightsArray[k] === targetNumber && 
                weightsArray[k] !== weightsArray[i]) {
                return theTargetWeight = `${weightsArray[i]}, ${weightsArray[k]}`
            }
        }
    }

    // Somehow, you should combine the first and second solution.
    let targetNumberOne, targetNumberTwo
    for (let i = 0; i < weightsArray.length; i++) {
        targetNumberOne = scaleArray[0] + weightsArray[i]
        for (let k = 0; k < weightsArray.length; k++) {
            targetNumberTwo = scaleArray[1] + weightsArray[k]
            if (targetNumberOne === targetNumberTwo) {
                return theTargetWeight = `${weightsArray[i]}, ${weightsArray[k]}`
            }
        }
    }

    return theTargetWeight = false
}

console.assert(1 === scaleBalance([0, 1], [1, 5, 9]))
console.assert(2 === scaleBalance([6, 8], [1, 2, 7, 7]))
console.assert("3, 6" === scaleBalance([13, 4], [1, 2, 3, 6, 14]))
console.assert("6, 2" === scaleBalance([5, 9], [1, 6, 2, 7]))
console.assert("2, 6" === scaleBalance([9, 5], [1, 2, 6, 7]))
console.assert(false === scaleBalance([77, 4], [6, 14]))

