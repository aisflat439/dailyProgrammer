const squareCodeMessage = message => {
    const columnLength = Math.round(Math.sqrt(message.length))

    let val = message.split('').reduce((acc, item, index) => {
        // return item[]
    }, {})

    console.log('val', val);
    

    return message
}

console.assert('hae\nand\nvia\necy' === squareCodeMessage("haveaniceday"))
console.assert('fto\nehg\nee\ndd' === squareCodeMessage("feedthedog"))
console.assert('clu\nhlt\nio' === squareCodeMessage("chillout"))

// hae 
// and 
// via 
// ecy