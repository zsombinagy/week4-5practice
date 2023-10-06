let x = "asd";
let y = 12;
let z = false;


let arr = ["egy", "kettő", "három",];
let arr2 = [10, 2, 67];
let arr3 = [true, false, true];
let arr4 = ["string", 1, false];



let obj1 = {
    key1: "value",
    key2: 101,
    key3: false,
    key2: [
        "cat",
        "dog",
        "chicken"
    ],
    users: [
        {
            name: "Gipsz Jakab",
            age: 28,
            isActive: true,
            pets: {
                name: "Mirci",
                type: "cat"
            }

        }, 
        {
            name: "John Doe",
            age: 23,
            isActive: false,
            pets: {
                name: "Gordon",
                type: "cat"
            }
        
        }
    ]
}



function addTwoNumbers(number1, number2) {
    let sum = number1 + number2
    console.log(`the sum of two number(${number1}, ${number2}) is: ${sum}`)
    return sum
}


let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`the result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`)

function cbExample() {
    console.log("i am a callback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Ricsi", cbExample)
 