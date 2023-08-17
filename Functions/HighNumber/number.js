

// Request two numbers and compare them to see who is higher, lower or equal 

let num1 = prompt("First number!");
let num2 = prompt("second Number!");

function compare() {
    if(num1 > num2){
        alert("The first number " + num1 + " is higher!")
    }else if(num2 > num1){
        alert("The second number " + num2 + " is higher!")
    }else if(num1 === num2){
        alert("The numbers are equal!")
    }
}
compare();
