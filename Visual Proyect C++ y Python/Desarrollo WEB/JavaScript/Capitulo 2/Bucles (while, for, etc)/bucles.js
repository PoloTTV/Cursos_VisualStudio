let numero2 = 0
/* Este sirve para mostrar la condicionar, y repetir hasta q se cumpla, si no se cumple, lo seguira intentando*/
while (numero2 < 5)
{
    numero2++;
    document.writeln(numero2 + "<br><br>");
}
let numero3 = 0
/* Este es igual que while, pero la diferencia es q primero pregunta y despues muestra, este es mejor para cuando es mas necesario preguntar para no provocar bugs o errores*/
do 
{
    numero3++
    document.writeln(numero3  + "<br><b>")
}
while (numero3 < 10){}
let numero4 = 0;
/*El break puede romper el codigo totalmente y se puede hacer con una condicional como se puede observar */
while (numero4 < 100)
{
    numero4++
    document.writeln(numero4)
    if(numero4 == 10){
        break;
    }
}
/*Este funciona mucho mejor que el while, ya que directamente en la condicional le decimos que hacer si la condicion se cumple?, que condicion sera?, y poner la variable (que se puede morificar)(IMPORTANTE:El dato puede cambiar por fuera de este BLOQUE.)*/
for (let i = 0; i <= 6; i++)
{
    /*Este sirve para hacer que se salte un dato o lo elimine de la vista publica */
    if (i == 5)
    {
        continue;
    }
    document.writeln(i + "<br>")
}
document.writeln("<br> <br>")
/*La variable "for" tambien puede funcionar en los listados tipo "Array", con "for in" es para poner la posicion del dato y con "for of" para ver que contiene el dato (en "for in" al agregar la eiqueta array2[array2] puede hacer que funcione igual que un "for of"*/
let array1 = ["Pedro", "Maria", "Pablo", "Juan"]
let array2 =  ["perro", "gato", "caballo", array1,"burro", "jirafa"] ;

for (array in array2)
{
    document.writeln(array2 + "<br>")
}
document.writeln("<br> <br>")
for (array of array2)
{
    document.writeln(array2 + "<br>")
}

forRancio :
for(let array in array2){
    if(array == 2){

        for (let array of array1){
            document.writeln(array + "<br>");

            continue forRancio;
            

        }
    } else{

        document.writeln(array2 [array1] + "<br>")

    }
}