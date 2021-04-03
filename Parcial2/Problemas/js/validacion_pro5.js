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
              let num_h = parseInt(document.formulario.hombres.value) ; 
              let num_m = parseInt(document.formulario.mujeres.value) ; 

              let razon_h = (num_h * 100) / (num_h + num_m);
              let razon_m = (num_m * 100) / (num_h + num_m);

              
              document.formulario.porcent_h.value= razon_h + "%";
              
              document.formulario.porcent_m.value=razon_m + "%";

}



function validacion(e){

              let expresion = /[0-9]/;

              
              let valido1 = expresion.test(parseInt(document.formulario.hombres.value));
              let valido2 = expresion.test(parseInt(document.formulario.mujeres.value));

              valido = valido1 & valido2 ;


              return valido;
}

function borrar(){
              document.formulario.hombres.value="";
              document.formulario.mujeres.value="";
              document.formulario.porcent_h.value="";
              
              document.formulario.porcent_m.value="";
}
