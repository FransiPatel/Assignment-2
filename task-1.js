// Task 1: Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)


function sumNumbers(str) {
    let temp = 0;
    let sum = 0;
    let i = 0;

    for (; i < str.length; i++) {
        let ch = str[i];

        if (!isNaN(String(ch))) {
            temp += ch;
        }
        else {
            sum += parseInt(temp);
            temp = '0';
        }
    }
    return sum + parseInt(temp);
}

let str = 'foo8bar8cat2tc2'
console.log(sumNumbers(str));