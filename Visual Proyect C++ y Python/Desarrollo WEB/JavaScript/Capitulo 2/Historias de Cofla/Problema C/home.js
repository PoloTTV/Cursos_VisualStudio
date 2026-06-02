const sumar = (num1, num2) =>{
    resultado = parseInt(num1) + parseInt(num2);
    alert(`Este es tu resultado ${resultado} :D`);
    delete(num1, num2);
    return calculadora();
}
const restar = (num1, num2) =>{
    resultado = parseInt(num1) - parseInt(num2);
    alert(`Este es tu resultado ${resultado} :D`);
    return calculadora();
}
const multiplicar = (num1, num2) =>{
    resultado = parseInt(num1) * parseInt(num2);
    alert(`Este es tu resultado ${resultado} :D`);
    return calculadora();
}
const dividir = (num1, num2) =>{
    resultado = parseInt(num1) / parseInt(num2);
    alert(`Este es tu resultado ${resultado} :D`);
    return calculadora();
}

function calculadora(){
    alert("Que operacion deseas hacer?")
    operacion = prompt("1. Sumar, 2. Restar, 3. Multiplicar, 4.Dividir")
    if (operacion == 1){
        let num1 = prompt("Cual es el primer numero?")
        let num2 = prompt("Cual es el segundo numero?")
        sumar(num1, num2);
    }
    else if (operacion == 2){
        let num1 = prompt("Cual es el primer numero?")
        let num2 = prompt("Cual es el segundo numero?")
        restar(num1, num2);
    }
    else if (operacion == 3){
        let num1 = prompt("Cual es el primer numero?")
        let num2 = prompt("Cual es el segundo numero?")
        multiplicar(num1, num2);
    }
    else if (operacion == 4){
        let num1 = prompt("Cual es el primer numero?")
        let num2 = prompt("Cual es el segundo numero?")
        dividir(num1, num2);
    }else{
        alert("Ingrese nuevamente el valor :D")
        return calculadora();
    }
}
calculadora()