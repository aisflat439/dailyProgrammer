const range = (start, end, step = 1) => {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
}

const diagonalize = (startpoint, endpoint) => {
    let myarray
    
    if (startpoint > endpoint) {
        myarray = range(endpoint, startpoint).reverse()
        return myarray.map((item, index) => {
            return item = ' '.repeat(index) + item + '\n'
        }).join('')
    } else {
        myarray = range(startpoint, endpoint)
        return myarray.slice(0).reverse().map((item, index, arr) => {
            return item = ' '.repeat((arr.length - 1) - index) + item + '\n'
        }).join('')
    }
}

console.log(diagonalize(0, 5))
console.log(diagonalize(5, 0))
console.log(diagonalize(3, 8))
console.log(diagonalize(8, 3))