Declaration:

    let a = [1,2,3,4,5];
    console.log(a.length);

    Output: 5



    Accessing Array Elements:


    console.log(a[2]);

    Output: 3


Note that typeof an array is an object.

    Example:

    let a = [1,2,3,4,5];
    console.log(typeof(a));

    Output: object


Changing value of arrays:


    Strings are immutable, arrays are mutable.
    In case of arrays we can change the value of arrays, but in case of strings it it not possible.

    Example 1:

    let a = [1,2,3,4,5];

    a[0] = 100;


    console.log(a);


    Output: [ 100, 2, 3, 4, 5 ]



    Example 2:

    let a = "Abhra";

    a[0] = 100;

    console.log(a);

    Output: Abhra


    This was possible because arrays are mutable but strings are immutable.


Array Methods:

        1. toString(): Converts an array to a string and returns the result. The elements of the array are converted to strings and separated by commas.

        Example:

            let fruits = ["Apple", "Banana", "Mango"];
            let fruitsString = fruits.toString();
            console.log(fruitsString);


        Output: Apple,Banana,Mango


        2. join(): Creates and returns a new string by concatenating all the elements in an array, separated by a specified separator string. If no separator is provided, a comma (,) is used by default.

        Example 1:

            let fruits = ["Apple", "Banana", "Mango"];
            let fruitsString = fruits.join();
            console.log(fruitsString);

        Output: Apple,Banana,Mango

        Example 2:

            let fruits = ["Apple", "Banana", "Mango"];
            let fruitsString = fruits.join(' and ');
            console.log(fruitsString);

        Output: Apple and Banana and Mango


        3. pop(): Removes the last element from an array. "This method changes the length of the array".

        Example 1:

            let fruits = ["Apple", "Banana", "Mango"];
            let lastFruit = fruits.pop();  // stores the popped element
            console.log(lastFruit);
            console.log(fruits);


        Output:

            Mango
            [ 'Apple', 'Banana' ]


        4. push(): Adds one or more elements to the end of an array. This method modifies the original array.

        Example 1:

            let fruits = ["Apple", "Banana"];
            fruits.push("Mango", "Orange");
            console.log(fruits);

        Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]


        We can even add elements with data types different from the ones in the array.

        Example:

        let fruits = ["Apple", "Banana"];
        fruits.push(5);
        console.log(fruits);

        Output: [ 'Apple', 'Banana', 5 ]


        5. shift(): Removes the first element from an array. This method changes the length of the array.

        Example:

        let fruits = ["Apple", "Banana", "Mango"];
        fruits.shift();
        console.log(fruits);


        Output: [ 'Banana', 'Mango' ]


        6. unshift(): Adds one or more elements to the beginning of an array. This method changes the length of the array.


        Example:

        let fruits = ["Banana", "Mango"];
        fruits.unshift(5 , "Orange");
        console.log(fruits);


        Output: [ 5, 'Orange', 'Banana', 'Mango' ]



        7. delete: It is an operator used to remove a property from an object. When applied to an array, it deletes the element at the specified index, but it "does not change the length of the array, leaving undefined at the position of the deleted element".


        Example:

        let fruits = ["Apple", "Banana", "Mango"];
        delete fruits[1];
        console.log(fruits);
        console.log(fruits.length);


        Output:

        [ 'Apple', undefined, 'Mango' ]
        3


