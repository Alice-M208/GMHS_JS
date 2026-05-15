let pozdrav = "Zdravím"; // Global Scope


function sayHello() { //Deklarace funkce
   let pozdravFunkce = "Pozdrav z funkce" 
    console.log(pozdravFunkce)
}

if(true) {
    let zpráva = "Toto je bloková zpráva"
    console.log(zpráva)
}


sayHello(); // Volání funkce

function pozdrav2(name) {
    console.log("Zdravím" + name);
}

pozdrav2("Honza")

function calc(num1,num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 / num2)
    console.log(num1 * num2)
}

calc(7,12)