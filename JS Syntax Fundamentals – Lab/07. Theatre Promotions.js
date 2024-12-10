function ticketCalculation(dayOfWeek, ageOfPerson){
    let ticketPrice = {
        'Weekday': [12, 18, 12],
        'Weekend': [15, 20, 15],
        'Holiday': [5, 12, 10]
    };

    if (ageOfPerson < 0 || ageOfPerson > 122) {
        console.log('Error!');
        return;
    }

    let person = null;

    if (0 <= ageOfPerson && ageOfPerson <= 18 ){
        person = 0
    } else if (18 < ageOfPerson && ageOfPerson <= 64){
        person = 1
    } else if ( 64 <ageOfPerson && ageOfPerson <= 122){
        person = 2
    }

    console.log(`${ticketPrice[dayOfWeek][person]}$`)
}


ticketCalculation('Holiday', 22)