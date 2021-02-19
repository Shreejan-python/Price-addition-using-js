console.log("Hello world");

let total = 0;
let items = 0;

var num = Number(prompt("Please give the number of items you have bought?"));
items = items + num;
document.write("The total number of items you have bought is ", items, "<br>");

while (items > 0){
    var price = Number(prompt("Enter the price of the items"));
    total = total + price;
    
    items--;
    if (items==0){
        document.write("Your total price is ", total)
    }
}