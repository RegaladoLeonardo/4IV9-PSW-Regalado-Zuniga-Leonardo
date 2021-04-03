

const ejecurar = document.querySelector('#env');
let valido;


function validar(e){
              var patron = /[0-9]/;

              let valor = parseFloat(document.formulario.cantidad.value);
              valido = patron.test(valor);
              return valido;
}

function interes(){
              let resultado = parseFloat(document.formulario.cantidad.value);
              let interes = resultado*0.02;
              let total = resultado + interes;

              document.formulario.sueldoti.value="$"+total;
}

function borrar(){
              document.formulario.cantidad.value="";
              document.formulario.sueldoti.value="";
}

ejecurar.addEventListener('click', () => {

              validar(null);
              if(!valido){
                            alert('El campo no es valido!')
                            return true;
              }
              interes();
})

