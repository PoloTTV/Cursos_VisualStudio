//La abstraccion es saber el como se puede resumir un objeto o clase de forma en que solamente se vea lo mas importante de lo q nosotros queremos que tenga el propio objeto
//La modularidad es ver el problema y tratar de resolverlo en partes mas pequeñas para el termino de todo sea mas facil resolver un problema chiquito
//El encapsulamiento es como dice la palabra "encapsular" un objeto para que este no se pueda er desde otro lugar o modificar de igual manera
//Ver el como reaccionan con otros elementos solo cuando sus caracteristicas son diferentes
class Animal{
    constructor(especie,edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.inf = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
        
    }
    verInformacion = ()=>
    {
        document.writeln(`${this.inf} <br>`)
    }
    // ladrar(especie){
    //     if (this.especie == "Perro")
    //     {
    //         document.writeln("¡Wof!" + "<br>");
    //     }else{
    //         document.writeln(`No puede ladrar, ya que es un ${this.especie} <br>`)
    //     }

}
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    // Este es para modificar algun valor de una propiedad
    set setRaza(newName){
        this.raza = newName;
    }
    // Este es para agarrar un valor que necesitamos
    get getRaza(){
        return this.raza;
    }
    //El poner static en algun elemento de una clase hace eque este no tenga que depender de alguna otra propiedad como el "constructor" que depende delo que digan en especie, edad, color, etc.
    //Haciendo que esn resumen el static hace que eel elemento sea estatico y no depenede de cualquier otra cosa
    static ladrar(){
        alert("Wof")
    }
}
const perro = new Perro("Perro", 5, "rojo", "Freshpool");
const gato = new Animal("Gato", 3, "Negro");
const pajaro = new Animal ("Pajaro", 4, "Verde");
document.writeln(perro.color + "<br>")
perro.setRaza = "Doberman"
//El poner gato.ladrar(), es un ejemplo de polimorfismo ya que estamos viendo el como pueden interactuar diferentes caracteristicas de un elemento
console.log(perro, gato, pajaro);
perro.verInformacion();
Perro.ladrar();
document.writeln(perro.getRaza + "<br>")
gato.verInformacion();
// gato.ladrar();
pajaro.verInformacion();
// pajaro.ladrar();
