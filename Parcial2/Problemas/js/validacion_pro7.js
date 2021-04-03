
const ejecutar = document.querySelector('#env');
let valido;


ejecutar.addEventListener('click', () => {

              
              validacion(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }

              calcular();

})

function calcular(){
              let a = parseInt(document.formulario.num1.value) ; 
              let b = parseInt(document.formulario.num2.value) ;
              let resultado;
              
              if(a==b){
                            resultado = a*b;

              }
              if(a>b){
                            resultado = a-b;
              }else if(a<b){
                            resultado = a+b;
              }

              
              document.formulario.resultado.value= resultado;

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseInt(document.formulario.num1.value));
              let valido2 = expresion.test(parseInt(document.formulario.num2.value));

              valido = valido1 & valido2 ;


              return valido;
}




function borrar(){
              document.formulario.num1.value="";
              document.formulario.num2.value="";
              document.formulario.resultado.value="";
              
}
