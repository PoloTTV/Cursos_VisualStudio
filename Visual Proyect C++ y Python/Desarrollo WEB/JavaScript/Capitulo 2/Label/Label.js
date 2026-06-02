lista1 =["lapiz", "pluma", "borrador", "sacapuntas"]
lista2= ["cuaderno", "libro", "mochila", lista1, "regla"]

Bloque_for:
    for(let lista in lista2)
    {
        if (lista == 3)
        {
            for(let lista of lista1){
                continue Bloque_for;
                document.writeln(lista + "<br>")
            }
        } else {
            document.writeln(lista2[lista] +"<br>")
        }
    }