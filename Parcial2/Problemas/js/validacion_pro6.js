
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

              const meses = {
                            1: 31,
                            2: 29,
                            3: 31,
                            4: 30,
                            5: 31,
                            6: 30,
                            7: 31,
                            8: 31,
                            9: 30,
                            10: 31,
                            11: 30,
                            12: 31,
              }


              let usu_anio = document.formulario.fecha.value.substring(0,4) ;
              
              let usu_mes = document.formulario.fecha.value.substring(5,7) ;
              
              let usu_dia = document.formulario.fecha.value.substring(8,10) ;
              
              let fechaActual = new Date()

              let mes =  fechaActual.getMonth()+1;
              let dia =  fechaActual.getDate();
              let anio =  fechaActual.getFullYear() ;
              
                            
              let edad_anios;
              let edad_mes;
              let edad_dia;

              if(usu_mes > mes){
                            edad_anios = anio - usu_anio - 1;
                            if(dia >= usu_dia){
                                          edad_mes  = (12 - usu_mes) + mes;
                                          edad_dia = dia - usu_dia;
                            }else{
                                          edad_mes  = (12 - usu_mes) + mes - 1;
                                          edad_dia = meses[mes - 1] - usu_dia + dia;
                            }
              }
              else if(usu_mes == mes){
                            if(dia >= usu_dia){
                                          edad_anios = anio - usu_anio;
                                          edad_mes  = (12 - usu_mes) + mes;
                                          edad_dia = dia - usu_dia;
                            }else{
                                          edad_anios = anio - usu_anio - 1;
                                          edad_mes  = (12 - usu_mes) + mes - 1;
                                          if(edad_mes==12){
                                                        edad_mes=0;
                                                        edad_anios = edad_anios + 1;
                                          }
                                          edad_dia = meses[mes - 1] - usu_dia + dia;
                            }
              }
              else{
                            edad_anios = anio - usu_anio;
                            if(dia >= usu_dia){
                                          edad_mes  = mes;
                                          edad_dia = dia - usu_dia;
                            }else{
                                          edad_mes  = mes - 1;
                                          edad_dia = meses[mes - 1] - usu_dia + dia;
                            }
              }



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
