const evenFibonacci = (max) => {
    const fibArray = []
    
    Array.from({ length: max }, (n, i) => i + 1).map(item => {
        if (fibArray.length < 3) { 
            fibArray.push(item) 
            return
        } 
        const len = fibArray.length
        if (fibArray[len - 1] + fibArray[len - 2] === item) {
            fibArray.push(item) 
        }
    })

    return fibArray.filter(item => item % 2 === 0).reduce((acc, item) => acc + item)
}

console.assert(44 === evenFibonacci(100))
console.log(evenFibonacci(4000000))