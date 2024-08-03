### Extracting characters from a String:

### Example :

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

## Length of a String :

### Example :

    let a = "Harry";
    console.log(a.length);

    Output:

    5


## Template Literals:

    let a = "Abhra";
    let b = "Ray";

    console.log(`His name is ${a} and his other name is ${b}`);


    Output:

    His name is Abhra and his other name is Ray


#### Note -> We can also use double quotes inside backtics and it will be shown in the console.



## Pre Defined Functions:

## 1 .toUpperCase() :


Used to convert the given string to uppercase.

### Example :

        let a = "Abhra";
        console.log(a.toUpperCase());

        Output:

        ABHRA


## 2 .toLowerCase() :

Used to convert the given string to lowercase.

### Example :

        let a = "Abhra";
        console.log(a.toLowerCase());

        Output:

        abhra


## 3 .slice() :

Used to extract a part of string.

### Example 1 :

        let a = "Abhra";
        console.log(a.slice(2,4));      // does not include the character at 4th index but
        								   starts from 2nd index.

        Output: hr

### Example 2 :

        let a = "Abhra";
        console.log(a.slice(2));        // prints string starting from 2nd index.

        Output: hra


## 4 .replace() :

Used replace a character or string present in the given string.

### Example :

            let a = "Abhra";
            console.log(a.replace('a','c'));        // note that it only replaces the character
            										   or string from the first occurence.

            Output: Abhrc   ( not abhrc )



## 5 .concat() :

Used to contact ( add ) two strings.

### Example 1:

            let a = "Abhra";
            let b = "Ray";
            console.log(a.concat(b));

            Output: AbhraRay




### Example 2:

            let a = "Abhra";
            let b = "Ray";
            console.log(a.concat("snata", " ", b));    // can concat any number of strings given.

            Output: Abhrasnata Ray



## 6 .trim()

It removes whitespace before and after the string and not in between.

### Example:


                let a = "     Abhra     Ray         ";
                console.log(a);
                console.log(a.trim());

                Output:

                Abhra     Ray           // it has no blankspace before and after the string.


## 7 .charAt() :

Used to extract character from a specified index from the given string.

### Example:


                let a = "Abhra";
                console.log(a.charAt(2));

                Output: h



## 8 .indexOf():
Returns the index of the first occurrence of a specified value in a string.


### Example:

                let str = "Hello, world!";
                console.log(str.indexOf("world"));


                Output: 7

## 9 .lastIndexOf():
Returns the index of the last occurrence of a specified value in a string.


### Example:


                let str = "Hello, world!";
                console.log(str.lastIndexOf("world"));


                Output:

                7

## 10 .replace() :

Used to replace the old string with a new string.

### Example:

                let str = "Hello, world!";
                let newStr = str.replace("world", "JavaScript");
                console.log(newStr);

                Output: Hello, JavaScript!



## 11 .substring():

Used to extract a part of string.

### Example:

                let str = "Hello, world!";
                console.log(str.substring(0, 5));


                Output: Hello



## 12 .includes():

Checks if a string contains another string.


### Example:


                let str = "Hello, world!";
                console.log(str.includes("world"));

                Output: true



## 13 .startsWith():

Checks if a string starts with another string.


### Example:


                let str = "Hello, world!";
                console.log(str.startsWith("He"));


                Output: true


## 14 .endsWith():

Checks if a string ends with another string.


### Example:

                let str = "Hello, world!";
                console.log(str.endsWith("!"));


                Output: true