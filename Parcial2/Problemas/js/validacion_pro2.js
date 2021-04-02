
const ejecutar = document.querySelector('#cal');
let valido;


ejecutar.addEventListener('click', () => {

              if(!valido){
                            alert('¡Algun o algunos de los campos es invalido!')
                            return true;
              }
})

function validar(e){
              let teclado = e.keyCode;

              let expresion = /[0-9\d .]/;

              let entrada = String.fromCharCode(teclado);
              valido = expresion.test(entrada);
              return valido;
              
}

function calcular(){
              let valor1 = document.formulario.venta1.value;
              let valor2 = document.formulario.venta2.value;
              let valor3 = document.formulario.venta3.value;

              let resultado_v = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) ;
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
