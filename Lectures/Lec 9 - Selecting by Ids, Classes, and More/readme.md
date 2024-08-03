# Searching the DOM:


## 1. document.getElementById

This method is used to get the element with a given id attribute.

Example:

    <!-- HTML -->
    <span id="mySpan">Hello, World!</span>

    <!-- JavaScript -->
    let span = document.getElementById('mySpan');
    span.style.color = 'red';

This code will select the span element with id="mySpan" and change its text color to red.


## 2. document.querySelector

Returns the first element for the given CSS selector. It's an efficient version of document.querySelectorAll(css)[0].

Example:

    <!-- HTML -->
    <div class="container">
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </div>

    <!-- JavaScript -->
    let firstParagraph = document.querySelector('.container p');
    firstParagraph.style.color = 'green';


## 3. document.querySelectorAll

Returns all elements inside an element matching the given CSS selector.

Example:

    <!-- HTML -->
    <p class="text">Paragraph 1</p>
    <p class="text">Paragraph 2</p>
    <p class="text">Paragraph 3</p>

    <!-- JavaScript -->
    let paragraphs = document.querySelectorAll('.text');
    paragraphs.forEach(p => p.style.color = 'blue');

This code will select all p elements with the class text and change their text color to blue.

Using for each loop to access each element. We have to use for loop, could've also used normal for loops or other for loops.

##

### Note : We can also select a specific element inside a container using document.querySelectorAll

Example:

    <!-- HTML -->
    <div class="container">
        <p>First paragraph</p>
        <p>Second paragraph</p>
    </div>

    <!-- JavaScript -->
    let secondParagraph = document.querySelectorAll('.container p')[1];
    secondParagraph.style.color = 'green';


This code will specifically target the second paragraph inside the container div and change its text color to green.

## 4. document.getElementsByTagName

Returns elements with the given tag name.

Example:

    <!-- HTML -->
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <!-- JavaScript -->
    let listItems = document.getElementsByTagName('li');
    for (let item of listItems) {
        item.style.color = 'purple';
    }


## 5. document.getElementsByClassName

This method returns all elements that have the given CSS class. Note the "s" in "Elements," which indicates that it returns a collection of elements, not just a single element.

Example:

    <!-- HTML -->
    <div class="highlight">Item 1</div>
    <div class="highlight">Item 2</div>
    <div class="highlight">Item 3</div>

    <!-- JavaScript -->
    let elements = document.getElementsByClassName('highlight');
    for (let element of elements) {
        element.style.backgroundColor = 'yellow';
    }


## 6. document.getElementsByName

This method searches elements by the name attribute.

Example:

    <!-- HTML -->
    <form>
        <input type="text" name="username" value="John">
        <input type="text" name="username" value="Doe">
        <input type="text" name="password" value="password123">
    </form>

    <!-- JavaScript -->
    let usernameFields = document.getElementsByName('username');
    for (let field of usernameFields) {
        field.style.border = '2px solid blue';
    }


This code will select all input elements with the name username and change their border color to blue.