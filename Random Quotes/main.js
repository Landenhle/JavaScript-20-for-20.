const button = document.getElementById("btn");
const element = document.createElement("p");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
    var fruits = ['apple', 'grape', 'guava', 'pear', 'kiwi', 'mango', 'watermelon', 'strawberries', 'litchi'];
    element.innerText = fruits[Math.floor(Math.random() * fruits.length)];
    quote.append(element);    
})

