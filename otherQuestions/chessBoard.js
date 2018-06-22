function allTheSame(arr) {
    return new Set(arr).size == 1
}

function sameColor() {
    let colorsOfBoxes = []
    const boxes = Array.from(arguments)

    boxes.forEach((location, index) => {
        const color = (
            (location.charCodeAt(0) + location.charCodeAt(1)) % 2
        ) ? 'white' : 'black'
        colorsOfBoxes.push(color)
    })
    
    return allTheSame(colorsOfBoxes)
}

console.log('Next line should be true')
console.log(sameColor("B1", "D3"))

console.log('Next line should be true')
console.log(sameColor("C1", "E3"))

console.log('Next line should be false')
console.log(sameColor("B1", "B2"))

console.log('Next line should be false')
console.log(sameColor("F6", "G6"))

console.log('Next line should be true')
console.log(sameColor("C1", "E3", "F6", "H2"))