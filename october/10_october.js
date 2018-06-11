function collapseStrings(stringArray) {
    let reverseArr = stringArray.slice().reverse();
    let test;

    reverseArr.forEach(function(element, index) {
        test = reverseArr + element.substring(reverseArr[index].length); 
        console.log(test);
    });
    
    // let holder = [];

    // let newString = reverseArr[0] + (stringArray[0].substring(reverseArr[0].length));  
    // reverseArr[0] = stringArray[0].substring(reverseArr[0].length);
    
    // console.log(newString)
    // console.log(reverseArr[0])

    return stringArray;
}

console.log(collapseStrings(['dailyprogrammer', 'phillydev', 'fun']))