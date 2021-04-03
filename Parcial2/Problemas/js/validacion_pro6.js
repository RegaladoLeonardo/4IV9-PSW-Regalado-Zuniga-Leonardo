
const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              /*
              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
              */

              calcular_edad();






})


function calcular_edad(){

              
              let usu_anio = document.formulario.fecha.value.substring(0,4) ;
              
              let usu_mes = document.formulario.fecha.value.substring(5,7) ;
              
              let usu_dia = document.formulario.fecha.value.substring(8,10) ;
              
              let fechaActual = new Date()

              let mes =  fechaActual.getMonth()+1;
              let dia =  fechaActual.getDate();
              let anio =  fechaActual.getFullYear() ;

              
              let edad_anios = anio - usu_anio;
              let edad_mes =  mes - usu_mes;
              let edad_dia = dia - usu_dia;



              document.formulario.edad.value= edad_anios+"   año(s) ";
              
              document.formulario.mes.value= edad_mes+"   mes(es) ";
              
              document.formulario.dia.value= edad_dia+"   dia(s) ";
}

/*
function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseInt(document.formulario.hombres.value));
              let valido2 = expresion.test(parseInt(document.formulario.mujeres.value));

              valido = valido1 & valido2 ;


              return valido;
}
*/

function borrar(){
              document.formulario.fecha.value="";
              document.formulario.edad.value="";
              document.formulario.mes.value="";
              
              document.formulario.dia.value="";
}
