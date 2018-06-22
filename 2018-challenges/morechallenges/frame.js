const printStars = length => {
    let starString = '****'
    Array(length).fill().forEach(() => starString += '*')
    return starString
}

const padRight = (word, length) => {
    Array(length - word.length).fill().forEach(() => {
        word += ' '
    });
    return word += ' *'
}

const frameify = arr => {
    const longest = arr.reduce((len, current) => largest = len.length > current.length ? len.length : current.length)

    const frameOutput = arr.map((word, index, array) => {
        if (index === 0) return `${printStars(longest)} \n* ${padRight(word, longest)}\n`
        if (index === array.length - 1) return `* ${padRight(word, longest)}\n${printStars(longest)}`
        return `* ${padRight(word, longest)}\n`
    })    

    return frameOutput.join('')
}

console.log(frameify(["Hello", "world", "in", "a", "frame"]))
console.log(frameify(["a", "world", "in", "a", "frame"]))
