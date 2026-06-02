/*Dentro de un "array" podemos hacer lo que se llama agrupas elementos los cuales estos elementos o variables pueden contener diferentes datos correspondiente a un grupo, y se hace de la siguiente forma "frutas(la lista)[0(la posicion que esta el elemento en la lista).nombre(esto es opcional y es para poner elementos que estaan en una lista)]*/
let frutas = 
    {
        nombre: "Pera",
        precio: " 30$/KG",
        sabor: " Dulce",
        peso: " 120g",
    };
let nombre = frutas["nombre"];
let precio = frutas["precio"];
let sabor = frutas["sabor"];
let peso = frutas["peso"];
let frutas2=["Manzana"," Piña"," Pera"," Mandarina"," Mango"];
frase = `Se venden Frutas <br> ${nombre} a un precio de ${precio}, su sabor es muy ${sabor}, y su peso es de ${peso}.<br> Tambien tenemos mas frutas como <b>${frutas2}`
document.writeln(frase)
