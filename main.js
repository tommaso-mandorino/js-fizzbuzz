// #region For loop from 1 to 100
for (let i = 1; i <= 100; i++) {

    // Resulting string to print
    let finalString = '';

    // IF number is a multiple of 3
    if (i % 3 == 0) {

        // Add 'Fizz' to finalString
        finalString += 'Fizz';

    }

    // IF number is a multiple of 5
    if (i % 5 == 0) {

        // Add 'Buzz' to finalString
        finalString += 'Buzz';

    }

    // IF finalString is empty
    if (finalString === '') {

        // Print index
        console.log(i);

    }
    // ELSE print finalString
    else {

        // Print finalString
        console.log(finalString)

    }

}
// #endregion For loop from 1 to 100