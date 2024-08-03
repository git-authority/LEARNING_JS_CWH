## The Script Tag

The benefit of a separate js file is that the browser downloads it and stores it in its cache.

## alert():

    Ex: alert("Hello");

## prompt():

Used to take user input.

    Ex: let inp = prompt("Enter A Number");

## confirm():

Shows a message and waits for the user to press Ok or Cancel. Returns true for Ok and false for Cancel.


## Window Object, BOM, DOM:

The window object in JavaScript represents a window containing a DOM document. It is the global object in a web browser environment and provides various properties, methods, and events to interact with the browser window and control its behavior.

Under Window comes:
1. DOM
2. BOM
3. Javascript Core

## Document Object Model ( DOM ):

DOM represent the page content as HTML

    document.body   // page body as js object.

    document.body.style.background = "green";   // changes page background to green.


## Browser Object Model ( BOM ):

It represents additional objects provided by the browser for working with everything except the document.

The functions alert, prompt, confirm are also a part of BOM.