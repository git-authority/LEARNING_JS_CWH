## 1. createElement:

It is used to create a new HTML element. It doesn't add the element to the document; it simply creates it in memory. You can then manipulate it (e.g., set attributes, add content) before adding it to the document using methods like appendChild() or append().

#### Example:

```
<div id="container"></div>

<script>
    // Create a new <p> element
    const newParagraph = document.createElement('p');

    // Set the text content of the new element
    newParagraph.textContent = "This is a new paragraph.";

    // Append the new element to the existing container
    document.getElementById('container').appendChild(newParagraph);
</script>

```

Output:

```
This is a new paragraph.
```

This output is shown in the main webpage and not in the console.


## 2. append():

It is used to insert content at the end of a specified parent element.

#### Example:

```

<div id="container">Hello</div>

<script>
    const container = document.getElementById('container');
    container.append(" World!"); // Appends text
    const newElement = document.createElement('span');
    newElement.textContent = " How are you?";
    container.append(newElement); // Appends a new element
</script>

```

Output:

```

Hello World! How are you?

```

## 3. prepend():

Inserts a set of Node objects or DOMString objects before the first child of the specified node.

#### Example:

```
<div id="container">Existing content.</div>

<script>
    const container = document.getElementById('container');
    const newElement = document.createElement('p');
    newElement.textContent = "Prepended paragraph.";
    container.prepend(newElement); // Prepends at the start of #container
</script>

```

Output:

Prepended paragraph.
Existing content.


## 4. before()

Inserts a set of Node before the mentioned node.

#### Example:

```
<div id="referenceNode">Reference node.</div>

<script>
    const refNode = document.getElementById('referenceNode');
    const newElement = document.createElement('p');
    newElement.textContent = "Inserted before reference node.";
    refNode.before(newElement); // Inserts before #referenceNode
</script>
```

Output:

```
Inserted before reference node.
Reference node.
```

## 5. after()

Inserts a set of Node after the mentioned node.

#### Example:

```
<div id="referenceNode">Reference node.</div>

<script>
    const refNode = document.getElementById('referenceNode');
    const newElement = document.createElement('p');
    newElement.textContent = "Inserted after reference node.";
    refNode.after(newElement); // Inserts after #referenceNode
</script>
```

Output:

```
Reference node.

Inserted after reference node.
```

## 6. replaceWith()

Replaces the node with a set of Node.

#### Example:

```
<div id="oldNode">Old content.</div>

<script>
    const oldNode = document.getElementById('oldNode');
    const newElement = document.createElement('p');
    newElement.textContent = "New content replacing old content.";
    oldNode.replaceWith(newElement); // Replaces #oldNode with newElement
</script>
```

Output:

```
New content replacing old content.
```