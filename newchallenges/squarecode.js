const squareify = message => {
    const squareLength = Math.round(Math.sqrt(message.length))
    
    let squaredMessage = ''
    let holder = message.split('').reduce((acc, item, index) => {
        acc[index] = item
        return acc
    }, {})

    Object.entries(holder).sort((a, b) => {
        return a[0] % squareLength > b[0] % squareLength
    }).forEach((element, index) => {
        if (index % squareLength === 0) { squaredMessage += '\n' }
        squaredMessage += element[1]
    });

    return squaredMessage
}

console.log(squareify('helloworld'));

/*
hol
ewd
lo
lr
*/