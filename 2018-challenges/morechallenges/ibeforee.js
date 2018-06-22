const check = testword => {
    if (testword.includes('ie')) return testword.includes('cie') ? false : true
    if (testword.includes('ei')) return testword.includes('cei') ? true : false

    return true
}

console.assert(true === check('a'))
console.assert(true === check('zombie'))
console.assert(false === check('icier'))
console.assert(true === check('transceiver'))
console.assert(false === check('veil'))
