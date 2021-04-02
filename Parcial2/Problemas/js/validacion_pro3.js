const ejecutar = document.querySelector('#env');
let valido;


function validacion(e){
              let teclado = e.keyCode;

              let expresion = /[0-9]/;

              let entrada = String.fromCharCode(teclado);
              valido = expresion.test(entrada);
              return valido;
}



function descuento(){
              let inicial = document.formulario.monto_inicial.value ; 
              let num_inicial =  parseInt(inicial);

              let resultado =  num_inicial * 0.85 ; 


              document.formulario.monto_final.value="$"+resultado;

}


function borrar(){
              document.formulario.monto_inicial.value="";
              document.formulario.monto_final.value="";
}


ejecutar.addEventListener('click', () => {

              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
})