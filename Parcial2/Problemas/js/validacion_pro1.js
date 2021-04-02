

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
              var valor = document.formulario.cantidad.value;
              var resultado = parseInt(valor);
              var interes = resultado*0.02;
              var total = resultado + interes;

              document.formulario.sueldoti.value="$"+total;
}

function borrar(){
              document.formulario.cantidad.value="";
              document.formulario.sueldoti.value="";
}

ejecurar.addEventListener('click', () => {
              if(!valido){
                            alert('El campo no es valido')
                            return true;
              }
})

