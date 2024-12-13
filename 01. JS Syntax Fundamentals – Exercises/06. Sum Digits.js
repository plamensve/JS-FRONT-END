function sumDigits(number){
    let numberToString = number.toString()
    let result = 0;

    for (let i= 0; i < numberToString.length; i++){
        result += parseInt(numberToString[i])
    }

    console.log(result)
}

sumDigits(543)


