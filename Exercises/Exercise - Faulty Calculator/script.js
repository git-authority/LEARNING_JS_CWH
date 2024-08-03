let random = Math.random();
let a = prompt("Enter First Number: ");
let b = prompt("Enter Second Number: ");
let c = prompt("Enter Operation: ");

console.log(random);

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random > 0.1 )
{
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}
else
{
    c=obj[c];
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`);
}