const findCouplet = target => {
    const maxValue = parseInt(Math.sqrt(target))

    const allPossibleCombos = Array.from({ length: maxValue }, (n, i) => i + 1)
 console.log("allPossibleCombos ", allPossibleCombos);

    return target
}

console.log(findCouplet(25))
console.log(findCouplet(1000))