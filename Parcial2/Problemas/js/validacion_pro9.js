
const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }

              salario();

})

function salario(){
              let horas_t = parseInt(document.formulario.horas.value) ; 
              let paga = 120;

              let total;

              if(horas_t>40){
                            total = 40 * paga;
                            horas_t =  horas_t - 40;

                            if(horas_t>8){
                                          total = total + (paga*2*8);
                                          horas_t = horas_t - 8;

                                          total = total + (paga*3*horas_t)

                            }else{
                                          total= total + (paga*2*horas_t);
                            }

              }else{
                            total = horas_t * paga;
              }

              document.formulario.cobro.value= "$"+total;

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseInt(document.formulario.horas.value));

              valido = valido1 ;


              return valido;
}




function borrar(){
              document.formulario.horas.value="";
              document.formulario.cobro.value="";
              
}
