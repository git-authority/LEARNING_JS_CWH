## 1. Functions:

### Example 1:

    function sayHello() {
        console.log("Hello, World!");
    }
    sayHello(); // Calls the function


### Example 2:

    function add(a, b) {
        return a + b;
    }
    const result = add(2, 3); // result will be 5
    console.log(result);



## 2. Arrow Functions: (need to use semicolon at the end of functions after '}' )

### Equivalent of first example:

        const sayHello = () => {
        console.log("Hello, World!");
    };

    sayHello(); // Calls the function


### Equivalent of second example:


        const add = (a, b) => {
        return a + b;
    };

    const result = add(2, 3); // result will be 5
    console.log(result);
