const possibleExpressions = (numOne, numTwo, numThree) => {
    let answers = []
    answers.push(numOne + numTwo)
    answers.push(numOne / numTwo)
    answers.push(numOne * numTwo)
    answers.push(numOne - numTwo)
    return answers.indexOf(numThree) !== -1 ? true : false
}

console.assert(true === possibleExpressions(1,2,3))
console.assert(true === possibleExpressions(8, 9, -1))
console.assert(true === possibleExpressions(-256, -87, 22272))
console.assert(true === possibleExpressions(324, 81, 4))
console.assert(false === possibleExpressions(6, 6, 6))