    function ahoj() {
        console.log("Ahoj");
        console.log("Ahoj");
    }

    ahoj();

    let greeting = "Nazdárek";

    function showGreeting() {
        console.log(greeting);
    }

    showGreeting(); 

    function funkceUvnitr() {
        let cislo = 123;
        console.log(cislo);
    }

    funkceUvnitr();

// Parametr a Argument

function test(name) {
    console.log("Ahoj " + name);
}

test("Lukáš");
test("Emiška");
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2);
}

scitani(4,6)

function nasobeni(num1, num2) {
    console.log(num1 * num2);
}

nasobeni(2,3)

function deleni(num1, num2) {
    console.log(num1 / num2);
}

deleni(14,7)

function odcitani(num1, num2) {
    console.log(num1 - num2);
}

odcitani(13,8)


// Napiš funkci printRage, která vypíše do
// konzole všechna čísla od parametru start až po end 
// postup:
// 1) Deklarace funkce
// 2) definování parametrů
// 3) for smyčka
// 4) Vyvolání funkce a argumentů