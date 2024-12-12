function printAndSum(num1, num2){
    let result = 0
    let myList = []

    for (let i = num1; i <= num2; i++){
        result += i;
        myList.push(i);
    }

    console.log(myList.join(' '))
    console.log(`Sum: ${result}`)
}

printAndSum(50, 60)