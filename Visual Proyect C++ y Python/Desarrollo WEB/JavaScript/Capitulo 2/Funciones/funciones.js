//Declaracion de una funcion y su funcionamiento/codigo
function saludar (nombre){
        respuesta = prompt("Hola, como te fue, " + nombre + " ??");
    if (respuesta == "bien", "Bien")
    {
        alert("me alegra bastante");
    } else if (respuesta == "mal", "Mal") {
        alert ("uy, que mal");
        psicologia()
    }
}
//Esta es otra forma de hacer una funcion con una variable "constante"

// const bienvenida = function saludar(){
//         respuesta = prompt("Hola, como te fue?? ");
//     if (respuesta == "bien", "Bien")
//     {
//         alert("me alegra bastante");
//     } else if (respuesta == "mal", "Mal") {
//         alert ("uy, que mal");
//         psicologia()
//     }

// Esta es la ultima forma para nombrar funciones (que contengan solo un parametro) y es llamada funcion de "flecha"

// const bienvenida = nombre =>{
//         respuesta = prompt("Hola, como te fue, " + nombre + " ??");
//     if (respuesta == "bien", "Bien")
//     {
//         alert("me alegra bastante");
//     } else if (respuesta == "mal", "Mal") {
//         alert ("uy, que mal");
//         psicologia()
//     }
// }
// Llamar a la funcion y hacer que funcione
saludar(Hugo)
saludar(Alejandro)
function psicologia(){
    nuevaRespuesta = prompt("Quieres hablarlo");
    if (nuevaRespuesta = "si", "Si")
        informacionDelEstado = prompt ("Cuentame que es lo que tienes");
    else if (nuevaRespuesta = "No", "no")
        rectificarRespuesta = prompt ("Seguro?");
        if (rectificarRespuesta = "Si", "si")
        {
            alert ("Esta bien, cuidate");
        }
        else if (rectificarRespuesta = "No", "no")
            return psicologia();
}
//En esta parte podemos declarar parametros que nos indique el usuario o el dev, en donde se declaran las variables desde el llamado de la funcion
function multiplicacion(num1, num2)
{
    //Al ponerle "let" creamos una variable regional que solo funciona dentro de un bloque y no se puede ejecutar o cambiar afuera de este, si no tiene "let" se puede hacer lo mencionado ya que se vuelve una variable global (o de igual forma se puede poner el "var" para que sea de igual forma global)
    let res = num1 * num2;
    document.writeln(res);
    document.writeln("<br>")
}
multiplicacion(12, 2)
multiplicacion(12,5)