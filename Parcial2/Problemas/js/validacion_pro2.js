
const ejecutar = document.querySelector('#cal');
let valido;


ejecutar.addEventListener('click', () => {

              
              validar(null);
              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
              calcular();
})

function validar(e){
              let expresion = /[0-9]/;

              let valido1, valido2, valido3 ;

              valido1 = expresion.test(parseFloat(document.formulario.venta1.value));
              valido2 = expresion.test(parseFloat(document.formulario.venta2.value));
              valido3 = expresion.test(parseFloat(document.formulario.venta3.value));

              valido = valido1 & valido2 & valido3

              return valido;
              
}

function calcular(){

              let resultado_v = parseFloat(document.formulario.venta1.value) + parseFloat(document.formulario.venta2.value) + parseFloat(document.formulario.venta3.value) ;
              let comision = resultado_v * 0.1 ;
              
              let monto = comision + 8850 ;

              document.formulario.comision.value="$"+comision;
              document.formulario.total.value="$"+monto;
}






function borrar(){
              document.formulario.venta1.value="";
              document.formulario.venta2.value="";
              document.formulario.venta3.value="";
              document.formulario.comision.value="";
              document.formulario.total.value="";
}
