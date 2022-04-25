// function fullName(firstName,lastName) {
//     return firstName + lastName;
// }

// fullName("Arya","Stark");


// let result = fullName("Arya","Stark");

// let expected = fullName("Arya","Stark");


// if(result !== expected) {
//     throw new Error(`${result} is not equal to ${expected}`);
// }



function totalAmount(amount,taxRate) {
    return amount + (amount * taxRate);
}


let result = totalAmount(2000,8);

let expected = totalAmount(2000,8);


if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}


