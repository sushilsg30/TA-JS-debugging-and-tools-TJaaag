//   Testing Framework

function test(message,callback) {
    try{
        callback();
        console.log(`YES`,message);
    } catch(Error){
        console.error('NO',message);
    }
}

//Assertion Library

function expect(actual) {
    return{
        toEqual: function(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}



//testing functions

test("adding two numbers", () => {
    expect(addTwoNumbers(10,10)).toEqual(20);
});

test("adding two numbers", () => {
    expect(addTwoNumbers(10,10)).toEqual(21);
});

test("Multiply two numbers", () => {
    expect(multiplyTwoNumbers(10,10)).toEqual(100);
});

// functions

function addTwoNumbers(numA,numB) {
    return numA + numB;
}

function multiplyTwoNumbers(numA,numB) {
    return numA * numB;
}


