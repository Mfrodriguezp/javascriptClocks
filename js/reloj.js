let dato_fecha = new Date; //objeto de fecha y hora
const nombresDiasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre",
"noviembre","diciembre"];

/*DOM HTML reloj*/
const html_diaSemana=document.getElementById("dia"); // Dia de semana en HTML
const dia_numero=document.getElementById("dia_numero"); // Fecha número en HTML
const html_mes=document.getElementById("mes"); // Mes en HTML
const html_anio=document.getElementById("fullyear"); // Año HTML
/*DOM HTML reloj*/

let diaSemana=nombresDiasSemana[dato_fecha.getDay()];
let dia_numero=dato_fecha.getDay(); // Fecha en número
let mes=meses[dato_fecha.getMonth()];
let anio=dato_fecha.getFullYear(); //año
let hora=dato_fecha.getHours();
let minuto=dato_fecha.getMinutes();
let segundos=dato_fecha.getSeconds();
