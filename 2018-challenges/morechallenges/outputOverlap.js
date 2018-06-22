const outputOverlap = (arr1, arr2) => {
    let results = [];

    arr1.map(item => {
        let found =  arr2.filter(val => val === item)
        if (found > 0) return results.push(found[0])
    })

    return results.length > 0 ? results : 'No overlap'
}

console.log(outputOverlap([2, 3, 4, 5, 6], [4, 6, 8, 10]))
console.log(outputOverlap([2, 3, 4, 5, 6], ["dog", "cat", "person"]))
console.log(outputOverlap([2, 3, 4, 5, 6], [4, 86, -08, 10, 2]))

const outputOverlap2 = (arr1, arr2) => {
    let overlaps = [...arr1, ...arr2]
    overlaps = overlaps.map((item, index) => overlaps.includes(item, index + 1) ? item : '').filter(hasValue => hasValue)

    return overlaps.length ? overlaps : 'No overlap'
}

console.log(outputOverlap2([2, 3, 4, 5, 6], [4, 6, 8, 10]))
console.log(outputOverlap2([2, 3, 4, 5, 6], ["dog", "cat", "person"]))
console.log(outputOverlap2([2, 3, 4, 5, 6], [4, 86, -08, 10, 2]))