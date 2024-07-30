## 1. elem.matches(css)

This method checks if an element matches the given CSS selector.

Example:

    <!-- HTML -->
    <button class="btn primary">Click Me</button>

    <!-- JavaScript -->
    let button = document.querySelector('button');
    if (button.matches('.primary')) {
        console.log('The button has the class "primary".');
    } else {
        console.log('The button does not have the class "primary".');
    }


## 2. elem.closest(css)

This method looks for the nearest ancestor (including the element itself) that matches the given CSS selector.

Example:

    <!-- HTML -->
    <div class="container">
        <div class="nested">
            <button id="myButton">Click Me</button>
        </div>
    </div>

    <!-- JavaScript -->
    let button = document.getElementById('myButton');
    let closestContainer = button.closest('.container');
    if (closestContainer) {
        console.log('Found the closest container.');
    } else {
        console.log('No container found.');
    }


## 3. elem.contains(otherElem)

This method checks if one element is a descendant of another element, or if it is the same element.


Example:

    <!-- HTML -->
    <div id="parentDiv">
        <span id="childSpan">Hello, World!</span>
    </div>

    <!-- JavaScript -->
    let parentDiv = document.getElementById('parentDiv');
    let childSpan = document.getElementById('childSpan');
    if (parentDiv.contains(childSpan)) {
        console.log('The parent div contains the span.');
    } else {
        console.log('The parent div does not contain the span.');
    }
