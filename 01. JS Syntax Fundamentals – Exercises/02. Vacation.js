function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    const dayOfWeekIdx = {
        'Friday': 0,
        'Saturday': 1,
        'Sunday': 2
    };

    const priceOfTickets = {
        'Students': [8.45, 9.80, 10.46],
        'Business': [10.90, 15.60, 16],
        'Regular': [15, 20, 22.50]
    };

    let totalSum = 0;

    if (typeOfGroup === 'Business' && groupOfPeople >= 100) {
        groupOfPeople = groupOfPeople - 10;
    }

    totalSum = groupOfPeople * priceOfTickets[typeOfGroup][dayOfWeekIdx[dayOfWeek]];

    if (typeOfGroup === 'Students' && groupOfPeople >= 30) {
        totalSum = totalSum * 0.85;
    } else if (typeOfGroup === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalSum = totalSum * 0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}


vacation(40,
"Regular",
"Saturday"
)