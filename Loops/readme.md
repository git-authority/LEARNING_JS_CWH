for in loop:

    Used to give keys of object and their values.

    Example:

    let person = {
    name: "Alice",
    age: 25,
    city: "Wonderland"};

    for (let key in person) {
        console.log(key,person[key]);
    }


    Output:

    name Alice
    age 25
    city Wonderland



for of loop:

    Used to give values in arrays, strings. It does not give their keys.

    Example:

    let fruits = ["apple", "banana", "cherry"];
    for (let fruit of fruits)
    {
        console.log(fruit);
    }


    Output :

    apple
    banana
    cherry