/*Esta parte es para hacer comparaciones, ya sea igualdaades, desigualdades, identidad, desidentidad (estos dos ultimos es como mas estricto al tipo de dato y que el dato sea igual), mayor que, menor que */
let numero_1 = prompt("Que numero elegis?"), numero_2 = prompt("Que numero elegis?")
if (numero_1 == numero_2){
    document.writeln(`Los numeros ${(numero_1)} y ${numero_2} son iguales`)
}
else if (numero_1 > numero_2){
    document.writeln(`El numero ${(numero_1)} es mayor a ${numero_2}`)
}
else{
    document.writeln(`"El numero ${numero_1} es menor que ${numero_2}`)
}
