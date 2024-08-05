## 1. setInterval

<strong>Purpose:</strong> Repeatedly executes a function at specified intervals.<br>

<strong>Syntax:</strong> setInterval(callback, interval, [arg1, arg2, ...])<br>

<strong>callback:</strong> The function to be executed repeatedly.<br>

<strong>interval:</strong> The number of milliseconds between each execution of the function.<br>

<strong>arg1, arg2, ...:</strong> Optional arguments that are passed to the callback function<br>


#### Example:

```
const intervalId = setInterval(() => {
    console.log("This will run every 1 second");
}, 1000);
```

<strong> In this example, the message will be logged to the console every 1 second.</strong>

To stop the interval, you can use <strong>clearInterval</strong>:

```
clearInterval(intervalId);
```


## 2. setTimeout

<strong>Purpose:</strong> Executes a function once after a specified delay.<br>

<strong>Syntax:</strong> setTimeout(callback, delay, [arg1, arg2, ...])<br>

<strong>callback:</strong> The function to be executed.<br>

<strong>delay:</strong> The number of milliseconds to wait before executing the function.<br>

<strong>arg1, arg2, ...:</strong> Optional arguments that are passed to the callback function.<br>


#### Example:

```
const timeoutId = setTimeout(() => {
    console.log("This will run after 2 seconds");
}, 2000);
```

<strong>In this example, the message will be logged to the console after a 2-second delay.</strong>

To stop the timeout, you can use <strong>clearTimeout</strong>:

```
clearTimeout(timeoutId);
```