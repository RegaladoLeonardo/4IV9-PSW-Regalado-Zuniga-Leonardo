const ejecutar = document.querySelector('#env');
let valido;


function validacion(e){
              let expresion = /[0-9]/;

              let valor =  parseFloat(document.formulario.monto_inicial.value);
              valido = expresion.test(valor);
              return valido;
}



function descuento(){
              let num_inicial =  parseFloat(document.formulario.monto_inicial.value);

              let resultado =  num_inicial * 0.85;


              document.formulario.monto_final.value="$"+resultado;

}


function borrar(){
              document.formulario.monto_inicial.value="";
              document.formulario.monto_final.value="";
}


ejecutar.addEventListener('click', () => {
              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
              descuento();
})