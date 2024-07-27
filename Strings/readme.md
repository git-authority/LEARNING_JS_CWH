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



        > .concat()

            Example 1:

            let a = "Abhra";
            let b = "Ray";
            console.log(a.concat(b));

            Output:

            AbhraRay




            Example 2:

            let a = "Abhra";
            let b = "Ray";
            console.log(a.concat("snata", " ", b));     // can concat any number of strings given.

            Output:

            Abhrasnata Ray



            > .trim()

                It removes whitespace before and after the string and not in between.

                Example:


                let a = "     Abhra     Ray         ";
                console.log(a);
                console.log(a.trim());

                Output:

                Abhra     Ray           // it has no blankspace before and after the string.


            > charAt()

                Example:


                let a = "Abhra";
                console.log(a.charAt(2));

                Output:

                h



            > indexOf(): Returns the index of the first occurrence of a specified value in a string.


                Example:

                let str = "Hello, world!";
                console.log(str.indexOf("world"));


                Output:

                7

            > lastIndexOf(): Returns the index of the last occurrence of a specified value in a string.


                Example:


                let str = "Hello, world!";
                console.log(str.lastIndexOf("world"));


                Output:

            > replace()


                Example:

                let str = "Hello, world!";
                let newStr = str.replace("world", "JavaScript");
                console.log(newStr);

                Output:

                Hello, JavaScript!



            > substring()

                Example:

                let str = "Hello, world!";
                console.log(str.substring(0, 5));


                Output:

                Hello



            > includes(): Checks if a string contains another string.


                Example:


                let str = "Hello, world!";
                console.log(str.includes("world"));

                Output:

                true



            > startsWith(): Checks if a string starts with another string.


                Example:


                let str = "Hello, world!";
                console.log(str.startsWith("He"));


                Output:

                true


            > endsWith(): Checks if a string ends with another string.


                Example:

                let str = "Hello, world!";
                console.log(str.endsWith("!"));


                Output:

                true