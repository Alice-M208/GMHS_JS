function multiply(a,b) {
  let result = a * b;
  return result;
}

result = multiply(5,10)
console.log(result)



function multiply(a,b) {
    let result = a * b;
    return result
}

console.log(multiply(5, 10))


function test() {
    return "Hotovo";
    console.log("Tady by byl nějaký text")
}

console.log(test());


function vek(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(vek(18))