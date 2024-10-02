//VOID FUNCTION
function computation(num1, num2, operation) {
    switch (operation) {
        case 'add':
            console.log(`The result of the addition is: ${num1 + num2}`);
            break;
        case 'subtract':
            console.log(`The result of the subtraction is: ${num1 - num2}`);
            break;
        case 'multiply':
            console.log(`The result of the multiplication is: ${num1 * num2}`);
            break;
        case 'divide':
            if (num2 != 0) {
                console.log(`The result of the division is: ${num1 / num2}`);
            } else {
                console.error("Cannot divide by zero.");
            }
            break;
        default:
            console.error("Invalid operation. Please use 'add', 'subtract', 'multiply' or 'divide'.");   
    }
}
//Examples
console.log(computation(10,5, 'add'));
console.log(computation(10, 5, 'subtract'));
console.log(computation(10, 5, 'multiply'));
console.log(computation(10, 5, 'divide'));

//RETURN FUNCTION

/*function computation(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1+num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 != 0) {
                return num1 / num2;
            } else {
                throw new Error("Cannot divide by zero.");
            }
        default:
            throw new Error("Invalid operation. Please use 'add', 'subtract', 'multiply' or 'divide'.");
    }
}

console.log(computation(10,5, 'add'));
console.log(computation(10, 5, 'subtract'));
console.log(computation(10, 5, 'multiply'));
console.log(computation(10, 5, 'divide'));*/