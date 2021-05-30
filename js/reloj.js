function reloj_javascript() {
    let dato_fecha = new Date; //objeto de fecha y hora
const nombresDiasSemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre",
"noviembre","diciembre"];

/*DOM HTML reloj*/
const html_diaSemana=document.getElementById("dia"); // Dia de semana en HTML
const html_dia_numero=document.getElementById("dia_numero"); // Fecha número en HTML
const html_mes=document.getElementById("mes"); // Mes en HTML
const html_anio=document.getElementById("fullyear"); // Año HTML
const html_hora=document.getElementById("hora");
const html_minuto=document.getElementById("minuto");
const html_segundo=document.getElementById("segundo");
const html_am_pm=document.getElementById("am_pm");
/*DOM HTML reloj*/

let diaSemana=nombresDiasSemana[dato_fecha.getDay()];
let dia_numero=dato_fecha.getDate(); // Fecha en número
let mes=meses[dato_fecha.getMonth()];
let anio=dato_fecha.getFullYear(); //año
let hora=dato_fecha.getHours();
let minuto=dato_fecha.getMinutes();
let segundo=dato_fecha.getSeconds();

    html_diaSemana.innerHTML=diaSemana;
    html_dia_numero.innerHTML=dia_numero + " de";
    html_mes.innerHTML=mes + " del";
    html_anio.innerHTML=anio;
    if (hora<=12) {
        html_hora.innerHTML="0"+hora;
    }else{
        html_hora.innerHTML=hora-12;
    }
    if (minuto<10) {
        html_minuto.innerHTML="0"+minuto;
    }else{
        html_minuto.innerHTML=minuto;
    }
    if (segundo<10) {
        html_segundo.innerHTML="0"+segundo;
    }else{
        html_segundo.innerHTML=segundo;
    }
    if (hora >12) {
        html_am_pm.innerHTML="PM";
    } else {
        html_am_pm.innerHTML="AM";
    }   
}

reloj_javascript();
let invervalo = setInterval(reloj_javascript,1000);