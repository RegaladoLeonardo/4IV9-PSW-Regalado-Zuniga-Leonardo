
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
              let a = parseFloat(document.formulario.num1.value) ; 
              let b = parseFloat(document.formulario.num2.value) ;
              let c = parseFloat(document.formulario.num3.value) ;
              let mayor;
              

              if(a>b){
                            if(a>c){
                                          mayor = a;
                            }
              }
              
              if(b>a){
                            if(b>c){
                                          mayor = b;
                            }
              }
              
              if(c>a){
                            if(c>b){
                                          mayor = c;
                            }
              }
              else{
                            
                            alert('¡Hay numeros iguales :((!')
                            mayor = ":(";
              }
                  

              document.formulario.resultado.value= mayor;

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseFloat(document.formulario.num1.value));
              let valido2 = expresion.test(parseFloat(document.formulario.num2.value));

              valido = valido1 & valido2 ;


              return valido;
}




function borrar(){
              document.formulario.num1.value="";
              document.formulario.num2.value="";
              document.formulario.num3.value="";
              document.formulario.resultado.value="";

              
}
