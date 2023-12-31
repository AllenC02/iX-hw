function printEven(parameter) {
    for (let i = 1; i < parameter + 1; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}
// printEven(50)

function printFibonacci(length) {
    let n1 = 0;
    let n2 = 1;
    let nextN;

    for (let i = 1; i <= length; i++) {
        console.log(n1);
        nextN = n1 + n2;
        n1 = n2;
        n2 = nextN;
    }
}
// printFibonacci(20)

function printArrayAvg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let avg = sum / array.length;
    console.log(avg)
}
// printArrayAvg([2,3,4,5,6])

function printArrayMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log(max)
}
// printArrayMax([9,3,5,1,16,3])

function printArrayMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    console.log(min)
}
// printArrayMin([9,3,5,1,16,3])

function returnVowels(string) {
    let vowels = 'aeiou'
    let result = ''
    for (let i =0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}
// console.log(returnVowels('aeiouacbauwdnacowqijnqwe'))

function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result;
}
// console.log(addTwoNum(3,19))

function multTwoNum(num1, num2) {
    let result = num1 * num2;
    return result;
}
// console.log(multTwoNum(3,19))

function returnPostal(city) {
    const cityPostal = {
        "Yorba Linda": "92886",
        "Irvine": "92620",
        "Beverly Hills": "90210",
    };
    const postal = cityPostal[city];
    if (postal) {
        return postal;
    }
}
// console.log(returnPostal("Irvine"))

function sortArrayAlph(array) {
    let sorted = array.sort();
    return sorted;
}
// console.log(sortArrayAlph(['c','b','a','d']))

function sortASC(array) {
    let sorted = array.sort((a,b) => a - b);
    return sorted;
}
// console.log(sortASC([3,2,1]))

function returnReverse(num) {
    let reversed = num.toString().split('').reverse().join('')
    let result = parseInt(reversed);
    return result;
}
// console.log(returnReverse(92620))
// THIS DOESN'T WORK BECAUSE 0 IS LOST AS A STRING !!!
//2629

function capitalizeAll(string) {
    return string.toUpperCase();
    
}
// console.log(capitalizeAll('abcde'))

function returnOccurances(string, letter) {
    let a = string.indexOf(letter)
    let result = 0;
    while (a != -1) {
        result++;
        a = string.indexOf(letter, a + 1);
    }
    return result;
}
// console.log(returnOccurances('abbc','b'))

