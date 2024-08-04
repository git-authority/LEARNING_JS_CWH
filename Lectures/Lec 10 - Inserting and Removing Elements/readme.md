## 1. innerHTML:

This property is used to get or set the HTML content inside an element.

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>

<script>
    console.log(document.querySelector(".container").innerHTML);
</script>

```

Output:

```
<div class="box">This is a Box.</div>
```


## 2. outerHTML:

This property is used to get or set the entire HTML of an element, including the element itself.

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>

<script>
 	console.log(document.querySelector(".container").outerHTML);
</script>

```

Output:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>
```


## 3. innerText:

This property is used to get or set the text content inside an element, without any HTML tags.

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>

<script>
    console.log(document.querySelector(".container").innerText);
</script>
```

Output:

```
This is a Box.
```

## 4. tagName:

This property returns the tag name of the element in uppercase.

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>
<script>
    console.log(document.querySelector(".container").tagName);
</script>
```

Output:

```
DIV
```

## 5. nodeName:

This property returns the name of the node in uppercase.

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
</div>

<script>
    console.log(document.querySelector(".container").nodeName);
</script>
```

Output:

```
DIV
```

## Difference between tagName and nodeName

1. tagName: Specifically refers to the tag name of an HTML element and only applies to element nodes.

2. nodeName: Applies to all node types (elements, text nodes, comment nodes, etc.) and returns the name of the node.


## 6. textContent:

It is used to get or set the text content of an element and all its descendants.

<strong>Unlike innerText, textContent includes all text, even if it's hidden with CSS styles like display: none </strong>

#### Example:

```
<div class="container">
    <div class="box">This is a Box.</div>
    <div class="fun">Fun</div>
</div>

<script>
    console.log(document.querySelector(".container").textContent);
</script
```

Output:

```
This is a Box.
Fun
```