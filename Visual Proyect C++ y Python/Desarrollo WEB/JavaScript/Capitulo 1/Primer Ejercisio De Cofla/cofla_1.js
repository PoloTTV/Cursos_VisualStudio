let monto_ingresado =  parseFloat(prompt("¿De cuánto dinero dispone?"));

let precio_nieve_agua = 1.0;
let n_l = 1.5;
let p_a = 1.2;
let p_l = 2.4;
let bombon_he_heladix = 2.0;
let bombon_he_heladovich = 2.5;
let bombon_he_helardo = 1.8;
let bote_de_1de4_n_l = 7.0;
let bote_de_1de4_n_a = 4.0;

if (monto_ingresado >= bote_de_1de4_n_l) {
    let devolucion = monto_ingresado - bote_de_1de4_n_l;
    document.writeln(`Cómprate un Cuarto de bote de helado de leche y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= bote_de_1de4_n_a) {
    let devolucion = monto_ingresado - bote_de_1de4_n_a;
    document.writeln(`Cómprate un Cuarto de bote de helado de agua y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= bombon_he_heladovich) {
    let devolucion = monto_ingresado - bombon_he_heladovich;
    document.writeln(`Cómprate un Bombón de Nieve Marca Heladovich y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= bombon_he_heladix) {
    let devolucion = monto_ingresado - bombon_he_heladix;
    document.writeln(`Cómprate un Bombón de Nieve Marca Heladix y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= bombon_he_helardo) {
    let devolucion = monto_ingresado - bombon_he_helardo;
    document.writeln(`Cómprate un Bombón de Nieve Marca Helardo y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= p_l) {
    let devolucion = monto_ingresado - p_l;
    document.writeln(`Cómprate una Paleta de Leche y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= p_a) {
    let devolucion = monto_ingresado - p_a;
    document.writeln(`Cómprate una Paleta de Agua y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= n_l) {
    let devolucion = monto_ingresado - n_l;
    document.writeln(`Cómprate una Nieve de Leche y te sobran ${devolucion} :D`);
} else if (monto_ingresado >= precio_nieve_agua) {
    let devolucion = monto_ingresado - precio_nieve_agua;
    document.writeln(`Cómprate una Nieve de Agua y te sobran ${devolucion} :D`);
} else {
    document.writeln("No te alcanza para ningún producto :");
}