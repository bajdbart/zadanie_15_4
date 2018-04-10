// First task
function addString(str1, str2) {
    console.log(`${str1}${str2}`);
}

addString('Hello', "World");

//Second task

const multiply = (a = 1, b = 1) => console.log(a * b);

multiply(2, 5);
multiply(2);

// Third task

const average = (...numbers) => {
    var sum = numbers.reduce((prev, cur) => prev + cur);
    console.log((sum / numbers.length).toFixed(2));
}

average(1);
average(1, 3);
average(1, 3, 6, 6);

//Fourth task 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);


// Fifth task

const [, , firstName, , lastName] = [1, 4, 'Iwona', false, 'Nowak'];
console.log(`${firstName} ${lastName}`);