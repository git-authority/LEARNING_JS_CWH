let, var and const:

    1. let has block scope
    2. var has global scope
    3. const is block scope and can't be updated


typeof:

    console.log(typeof 42);            // "number"
    console.log(typeof 'hello');       // "string"
    console.log(typeof true);          // "boolean"


Primitive Data Types

    1.Number
        Represents both integer and floating-point numbers.
        Example:

            let age = 25;
            let temperature = 98.6;

    2.String

        Represents sequences of characters.
        Example:

            let name = "Alice";
            let greeting = 'Hello, World!';


    3.Boolean

        Represents logical values: true and false.
        Example:

            let isActive = true;
            let isVerified = false;

    4.Undefined

        Represents a variable that has been declared but not yet assigned a value.
        Example:

            let uninitialized;
            console.log(uninitialized); // undefined

    5.Null

        Represents the intentional absence of any object value.
        Example:

            let emptyValue = null;

    6.Symbol

    7.BigInt (ES2020)

        Represents whole numbers larger than the range supported by the Number type.
        Example:

            let bigInt = 1234567890123456789012345678901234567890n;



