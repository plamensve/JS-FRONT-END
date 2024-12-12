function ages(age){
    let dictionary = {
        'baby': [0, 2],
        'child': [3, 13],
        'teenager': [14, 19],
        'adult': [20, 65],
        'elder': [65, Infinity]
    }

    let found = false;

    for (const [key, value] of Object.entries(dictionary)) {
        if (age >= value[0] && age <= value[1]){
            console.log(key);
            found = true;
            break;
        }
    }

    if (!found){
        console.log('out of bounds')
    }

}

ages(-1)