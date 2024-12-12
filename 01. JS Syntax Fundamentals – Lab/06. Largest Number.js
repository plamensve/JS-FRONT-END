function largestNumber(num1, num2, num3){
    let numArray = [num1, num2, num3]
    let largestNum = numArray[0]

    for (let num of numArray) {
            if (num > largestNum){
                largestNum = num;
        }
    }

    console.log(`The largest number is ${largestNum}.`)
}

largestNumber(5, -3, 16)