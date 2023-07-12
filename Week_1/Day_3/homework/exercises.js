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

