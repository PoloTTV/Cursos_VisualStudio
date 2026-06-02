class celular{
    constructor(color, peso, resolucionDePantalla,resolucionDeCamara, memoriaRAM){
        this.color = color;
        this.peso = peso;
        this.resolucionDeCamara = resolucionDeCamara;
        this.resolucionDePantalla = resolucionDePantalla;
        this.memoriaRAM = memoriaRAM;
        this.encendido = false;
        this.darInformacion = `Estos son las especificaciones del celular: <br> Color: ${this.color}<br>Peso: ${this.peso}<br>Resolcion de camara: ${this.resolucionDeCamara}<br>Resolucion de pantalla: ${this.resolucionDePantalla}<br>Memoria RAM: ${this.memoriaRAM}<br>`
    }
    verInformacion = ()=>
    {
        document.writeln(`${this.darInformacion} <br>`)
    }
    presionarBotonEncendido (){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular apagado");
        }
    }
    reiniciar (){
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el eclular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Se tomo la foto en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`Grabando video en una resolucion de ${this.resolucionDeCamara}...`)
    }
}
class celularesAltaGamma extends celular{
    constructor(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRAM, resolucionDeSegundaCamara){
        super(color, peso, resolucionDeCamara, resolucionDePantalla,memoriaRAM);
        this.resolucionDeSegundaCamara = (true, resolucionDeSegundaCamara)
        this.reconocimientoFacial = true;
        this.camaraLenta = true; 
        this.InformacionGammaAlta = `Estos son las especificaciones del celular:<br>Tiene reconocimiento facial: Si <br> <br> Color: ${this.color}<br>Peso: ${this.peso}<br>Resolcion de camara: ${this.resolucionDeCamara}<br>Resolucion de la Segunda Camara: ${this.resolucionDeSegundaCamara}<br>Tiene camara lenta: Si<br>Resolucion de pantalla: ${this.resolucionDePantalla}<br>Memoria RAM: ${this.memoriaRAM}<br>`
    }
    ReconocimientoFacial(){
        if (this.reconocimientoFacial == true){
            alert("Probando reconocimiento facial...");
            alert("Funciona :D");
            this.reconocimientoFacial = false;
        } else {
            alert("Tu celular no tiene reconocimiento facial");
        }
    }
    tomarFotoSegundaCamara(){
        alert(`Se tomo la foto en una resolucion de: ${this.resolucionDeSegundaCamara}`)
    }
    grabarVideoSegundaCamara(){
        alert(`Grabando video en una resolucion de ${this.resolucionDeSegundaCamara}...`)
        if (this.camaraLenta == true)
        {
            alert("Probando camara lenta...")
            alert("Funciona :D")
        } else {
            alert("No tiene camara lenta")
        }
        
    }
    darInformacionGammaAlta(){
        document.writeln(this.InformacionGammaAlta);
    }
}
const celular1 = new celular("Negro", "600g", "2160px", "128MPX (Megapixeles", "8GB");
const celular2 = new celular("Verde", "500g", "1800px", "64MPX (Megapixeles", "12GB");
const celular3 = new celular("Blanco", "400g", "FullHD", "48MPX (Megapixeles", "8GB");
const celular4 = new celularesAltaGamma("Morado", "800g", "4K", "256MPX (Megapixeles", "16GB", "64MPX")
const celular5 = new celularesAltaGamma("Beige", "700g", "2K", "164MPX (Megapixeles", "24GB", "128MPX")

function probarCelulares(){
    eleccion = prompt("Cual es el celular que deseas probar?")
        if (eleccion == 1){
            celular1.presionarBotonEncendido();
            celular1.tomarFoto();
            celular1.grabarVideo();
            celular1.reiniciar(); 
            darInformacion = prompt("Quieres ver sus especificaciones?")
            if (darInformacion == "si" || darInformacion == "Si"){
                document.writeln(celular1.verInformacion())
            } else {
                return probarCelulares();
            } 
        }
        if (eleccion == 2){
            celular2.presionarBotonEncendido();
            celular2.tomarFoto();
            celular2.grabarVideo();
            celular2.reiniciar();
            darInformacion = prompt("Quieres ver sus especificaciones?")
            if (darInformacion == "si" || darInformacion == "Si"){
                document.writeln(celular2.verInformacion())
            } else {
                return probarCelulares();
            }
        }
        if (eleccion == 3){
            celular3.presionarBotonEncendido();
            celular3.tomarFoto();
            celular3.grabarVideo();
            celular3.reiniciar();
            darInformacion = prompt("Quieres ver sus especificaciones?")
            if (darInformacion == "si" || darInformacion == "Si"){
                document.writeln(celular3.verInformacion())
            } else {
                return probarCelulares();
            }
        }
        if (eleccion == 4){
            asegurarElecccion = prompt("Este es un celular de alta gamma, seguro?")
            if (asegurarElecccion == "si" || asegurarElecccion == "Si"){
                celular4.presionarBotonEncendido();
                celular4.ReconocimientoFacial();
                celular4.tomarFoto();
                celular4.tomarFotoSegundaCamara();
                celular4.grabarVideo();
                celular4.grabarVideoSegundaCamara();
                celular4.reiniciar();
                darInformacion = prompt("Quieres ver sus especificaciones?")
                if (darInformacion == "si" || darInformacion == "Si"){
                    document.writeln(celular4.darInformacionGammaAlta())
                } else {
                    return probarCelulares();
                }
            } else {
                return probarCelulares();
            }
        }
        if (eleccion == 5){
            asegurarElecccion = prompt("Este es un celular de alta gamma, seguro?")
            if (asegurarElecccion == "si" || asegurarElecccion == "Si"){
                celular5.presionarBotonEncendido();
                celular5.ReconocimientoFacial();
                celular5.tomarFoto();
                celular5.tomarFotoSegundaCamara();
                celular5.grabarVideo();
                celular5.grabarVideoSegundaCamara();
                celular5.reiniciar();
                darInformacion = prompt("Quieres ver sus especificaciones?")
                if (darInformacion == "si" || darInformacion == "Si"){
                    document.writeln(celular5.darInformacionGammaAlta())
                } else {
                    return probarCelulares();
                }
            } else {
                return probarCelulares();
            }
        }
    }
probarCelulares()