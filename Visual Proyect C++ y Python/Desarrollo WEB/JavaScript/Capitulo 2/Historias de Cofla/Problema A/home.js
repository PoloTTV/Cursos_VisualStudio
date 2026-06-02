let free = false;
const validadCliente = time =>{
    let nombre = prompt("Hola, bienvenido, Como te llamas?");
    let edad = prompt( "Un gusto " + nombre+  " cuantos años tienes? ");
    if (edad >= 18 )
    {
        if (time >= 2 && time < 7 && !free )
        {
            alert("Puedes pasar gratis :D");
            free = true
        } else{
            alert("Puedes pasar pero tienes que pagar la entrada");
        }
    }else{
        alert("Disculpa sos menor no podes pasar :(")
    }
}
validadCliente (12);
validadCliente (1);
validadCliente (2);
validadCliente (3)