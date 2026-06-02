let cantidadDeAlumnos = prompt("Cuantos alumnos hay en tu clase?");
let alumnosTotales = [];
    for (i = 0; i < cantidadDeAlumnos; i++) {
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i+1)), 0];
    }

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P")
    {
        alumnosTotales[p][1]++;
    }
}
for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}
for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]} : <br></br>
        _______Asistencia: ${alumnosTotales[alumno][1]} <br></br>
        _______Ausencia: ${30 - alumnosTotales [alumno][1]} 
`;
if  (30 - alumnosTotales [alumno][1] > 18)
{
    resultado+="REPROBADO POR INASISTENCIA <br>";
} else {
    resultado+= "<br><br>";
}document.writeln(resultado)
}