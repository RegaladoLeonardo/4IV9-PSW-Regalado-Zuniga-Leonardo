

const ejecurar = document.querySelector('#env');
let valido;


function validar(e){
              var teclado = e.keyCode;
              if(teclado == 8)
                            return true;

              var patron = /[0-9\d .]/;

              var prueba = String.fromCharCode(teclado);
              valido = patron.test(prueba);
              return valido;
}

function interes(){
              let valor = document.formulario.cantidad.value;
              let resultado = parseInt(valor);
              let interes = resultado*0.02;
              let total = resultado + interes;

              document.formulario.sueldoti.value="$"+total;
}

function borrar(){
              document.formulario.cantidad.value="";
              document.formulario.sueldoti.value="";
}

ejecurar.addEventListener('click', () => {
              if(!valido){
                            alert('El campo no es valido!')
                            return true;
              }
})

