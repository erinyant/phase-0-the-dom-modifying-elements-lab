// Write your code here!
console.log("hello world")
const main = document.getElementById("main")
console.log(main)
main.remove();

const newHeader = document.createElement("h1")
newHeader.id = 'victory';
newHeader.textContent = 'Erin is the champion';
document.body.appendChild(newHeader);


