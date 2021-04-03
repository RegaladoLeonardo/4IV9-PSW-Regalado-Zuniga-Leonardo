
const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }

              utilidad();

})

function utilidad(){
              let anios_ant = parseFloat(document.formulario.antiguedad.value) ;
              let salario = parseFloat(document.formulario.salario.value) ;
              let utilidad;
              
              if(anios_ant<1){

                            utilidad = salario * 0.05;
              }
              if(anios_ant>=1 & anios_ant<2){

                            utilidad = salario * 0.07;
              }
              if(anios_ant>=2 & anios_ant<5){
                            
                            utilidad = salario * 0.1;
              }
              if(anios_ant>=5 & anios_ant<10){

                            utilidad = salario * 0.15;
              }
              if(anios_ant>=10){

                            utilidad = salario * 0.2;
              }
              else if(anios_ant<0){
                            
                            alert('¡El numero esta fuera del rago!');
                            utilidad = "";

              }


              document.formulario.utilidad.value= "$"+utilidad;

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseInt(document.formulario.antiguedad.value));
              let valido2=  expresion.test(parseInt(document.formulario.salario.value));

              valido = valido1 & valido2;


              return valido;
}




function borrar(){
              document.formulario.antiguedad.value="";
              document.formulario.utilidad.value="";
              document.formulario.salario.value="";
              
}
