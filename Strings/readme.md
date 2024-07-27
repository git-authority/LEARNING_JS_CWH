Example 1:

    let a = "Harry";

    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);
    console.log(a[4]);

    Output:

    H
    a
    r
    r
    y

Example 2:

    let a = "Harry";
    console.log(a.length);

    Output:

    5


Template Literals:

    let a = "Abhra";
    let b = "Bhutu";

    console.log(`His name is ${a} and his other name is ${b}`);


    Output:

    His name is Abhra and his other name is Bhutu


    Note -> We can also use double quotes inside backtics and it will be shown in the console.



Pre Defined Functions:

    > .toUpperCase() :

        let a = "Abhra";
        console.log(a.toUpperCase());

        Output:

        ABHRA


    > .toLowerCase() :

        let a = "Abhra";
        console.log(a.toLowerCase());

        Output:

        abhra


    > .slice()

        Example 1:

        let a = "Abhra";
        console.log(a.slice(2,4));      // does not include the character at 4th index but starts from 2nd index.

        Output:

        hr

        Example 2:

        let a = "Abhra";
        console.log(a.slice(2));        // prints string starting from 2nd incex.

        Output:

        hra


        > .replace()

            let a = "Abhra";
            console.log(a.replace('a','c'));        // note that it only replaces the character or string of the first occurence

            Output:

            Abhrc   ( not abhrc )