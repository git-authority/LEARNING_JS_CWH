Difference between == and === :

    == only checks the vale between two species.
    === checks both the value and type of both species.

    Ex:

        3===3?
        Output : True

        "3"==3?
        Output : True (which is actually false, hence we use ===)

        "3"===3?
        Output : False


Ternary Operators:

    let number = 5;
    (number % 2 === 0) ? console.log("Even") : ("Odd");

    Output:

    Odd