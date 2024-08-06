## Synchronous Actions:

Synchronous actions are those that are executed sequentially, one after the other. Each operation must complete before the next one begins. If an operation takes time, it blocks the following operations until it finishes.

#### Example:

```
console.log('Step 1');
console.log('Step 2');
console.log('Step 3');
```

Output:

```
Step 1
Step 2
Step 3
```

In this example, Step 2 is executed only after Step 1 completes, and Step 3 waits for Step 2.


## Asynchronous Actions:

Asynchronous actions allow the code to continue running while waiting for certain tasks to complete. These tasks are executed in the background, and once completed, they trigger specific callbacks, promises, or use async/await to handle the result.

#### Example with Callbacks:

```
console.log('Start');

setTimeout(() => {
  console.log('Async Action');
}, 1000); // Asynchronous operation

console.log('End');
```

Output:

```
Start
End
Async Action
```

Here, setTimeout is asynchronous. It schedules the callback after 1 second, but the code doesn’t wait for it and continues to console.log('End').


## Callback Functions:

A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function or when a certain condition is met.

#### Example:

```
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
```

Explanation:

1. The greet function is defined with two parameters: name and callback.
2. The sayGoodbye function is defined, which logs 'Goodbye!' when called.
3. The greet function is called with 'Alice' as the name argument and the sayGoodbye function as the callback argument.
4. Inside greet, it logs 'Hello Alice'.
5. The callback() line calls the sayGoodbye function.
6. The sayGoodbye function logs 'Goodbye!'.



## Pyramid of Doom:

The <strong>"Pyramid of Doom,"</strong> also known as <strong>"Callback Hell,"</strong> is a term used to describe a situation where multiple nested callbacks are used in asynchronous JavaScript code. This leads to code that is difficult to read, maintain, and debug because of the deep indentation and complexity.


#### Example:

```
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doAnotherThing(newResult, function(finalResult) {
      doFinalThing(finalResult, function() {
        console.log('All done!');
      });
    });
  });
});
```

<strong>Hence we use Promises or Async/await</strong>

## Promises:

The solution to the callback hell is promises. A promise is a "promise of code execution". The code either excutes or fails, in both the cases the subscriber will be notified.

The syntax of a promise looks like:

```
let promise = new Promise(function(resolve, reject){
    //execute
});
```

resolve and reject are two callbacks provided by js itself. They are called like this:

1. resolve(value) -> If the job is finished succesfully.
2. reject(error) -> If the job fails.

The promise object returned by the new Promise constructor has three properties.

1. state: Initially pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.

2. result: Initially undefined, then changes to value if resolved or error when rejected.

### Consumers: then and catch

The consuming code can receive the final result of a promise through then and catch.

The most fundamental one is then.

#### Example:

```
promise.then(function(result){ //handle},
    function(error){//handle error});
```

If we are interested only in successful completions, we can provide only one function argument to then(), ex-

```
let promise = new Promise(resolve=>{
    setTimeout(()=> resolve("done"), 1000);
});

promise.then(alert);
```

If we are interested only in errors, we can use null as the first argument : then (null,f), or we can use catch:

promise.catch(alert)

promise.finally(()=>{}) is used to perform general cleanups.