function circleArea(radius){
    if (typeof(radius) == 'number'){
        let pi = Math.PI
        let area = pi * radius ** 2
        console.log(area.toFixed(2))
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(radius)}.`)
    }


}

circleArea(5)