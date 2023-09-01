

// Request two numbers and compare them to see who is higher, lower or equal 

let num1 = 0;
let num2 = 0;

// Cheking if is a number and request again the promp if the character is a letter

do {
    num1 = prompt("Fisrt number");
} while  (isNaN(Number(num1)))


do {
    num2 = prompt("Second Number");
} while  (isNaN(Number(num2)))



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
