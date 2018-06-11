const printscore = arr => {
    const totals =  arr.reduce((tally, item) => {
        if (item === item.toUpperCase()) {
            tally[item.toLowerCase()] = (tally[item.toLowerCase()] || 0) - 1
        } else {
            tally[item.toLowerCase()] = (tally[item.toLowerCase()] || 0) + 1
        }
        return tally
    }, {})
    return totals
}

console.log(printscore(["a", "b", "c", "d", "e"]))
console.log(printscore(["a", "c", "d", "e", "A", "A", "b", "b", "b"]))