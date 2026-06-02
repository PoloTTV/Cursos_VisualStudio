//Asi es como se empieza con la construccion de un objeto, creando una cclase
class animal{
    //Adentro de este se ponen las especificaciones de el objero en este caso de un "Animal"
    constructor(especie,edad, color){
        //Con this. se crean las propiedades de lo que va a contener nuestro objeto (en este caso el animal). De igual forma esto no se puede utilizar afuera de una clase
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.inf = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInformacion = ()=>
    {
        document.writeln(`${this.inf} <br>`)
    }
}
//Con "new" se ponen los nuevos objetos que van a estar adentro de la propia clase
let perro = new animal("Perro", 5, "rojo");
let gato = new animal("Gato", 3, "Negro")
let pajaro = new animal ("Pajaro", 4, "Verde")
//el poner una especificacion despues del "objeto" como .color, nos puede mostrar la propiedad que queramos que se muestre en ese caso el color del perro, y en consola al poner el objeto nos puede mostrar todas las especificaciones que tiene este nuevo animal)
document.writeln(perro.color + "<br>")
//De esta forma igualmente podemos poner toda la inf, de forma directa con el codigo que tenemos arriba


// document.writeln(`${perro.inf} <br>`)
// document.writeln(`${gato.inf} <br>`)
// document.writeln(`${pajaro.inf} <br>`)
console.log(perro, gato, pajaro)
// Esto es otra forma de verlo con una funcion adentro de la clase que nos permita ver por asi decirlo la "informacion" del objero o de igual forma hacer diferentes objetoscon fuinciones que nosotros elijamos
perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();
