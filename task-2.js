// Task 2: Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")


function sumofString(str) {
    let sum = 0, i = 0;
    num = str.split(",");
    console.log(num);
    for (i of num) {
        sum += parseFloat(i);
    }
    return sum;
}

let str = '1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8,9, 10.9';

console.log(sumofString(str));