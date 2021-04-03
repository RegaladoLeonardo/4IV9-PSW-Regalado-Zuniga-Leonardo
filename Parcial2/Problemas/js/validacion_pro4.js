const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
})

function calificar(){

              let cal_parciales = parseFloat(document.formulario.parciales.value) * 0.55 ;
              let cal_examenes = parseFloat(document.formulario.examen.value) * 0.3 ;
              let cal_trabajo = parseFloat(document.formulario.trabajo.value) * 0.15 ;

              let calificacion = cal_examenes + cal_parciales + cal_trabajo ; 



              document.formulario.calificacion.value=calificacion;

}

function validacion(e){

              let expresion = /[0-9]/;

              
              valido1 = expresion.test(parseFloat(document.formulario.parciales.value));
              valido2 = expresion.test(parseFloat(document.formulario.examen.value));
              valido3 = expresion.test(parseFloat(document.formulario.trabajo.value));

              valido = valido1 & valido2 & valido3 ;


              return valido;
}








function borrar(){
              document.formulario.parciales.value="";
              document.formulario.examen.value="";
              document.formulario.trabajo.value="";
              document.formulario.calificacion.value="";
}