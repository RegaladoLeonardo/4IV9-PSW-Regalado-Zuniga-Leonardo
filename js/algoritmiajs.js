//vamos a tener que obtener los valores de los input

function problema1(){
              var p1_input = document.querySelector('#p1-input').value;

              /*
              tenemos que identificar el espacio
              tenemos que invertir la cadena
              hola como
              como hola
              */ 

              var p1_array = p1_input.split(' ').reverse();

              //contruir una nueva cadena a partir del array invertido

              //comohola

              var p1_res = '';

              p1_array.forEach(function (palabra, i){
                  //si estamos al princio o final de la palabra
                  // como hola 
                            if(i != 0 || i != p1_array.length) p1_res += ' ';
                            p1_res += palabra;
              });

              document.querySelector('#p1-output').textContent = p1_res;
}

function problema2(){
              /*
              Para encontrar el minimo producto escalar entre 2 vectores, tenemos que realizar
              las operaciones correspondientes que son el maximo valor de un vector por
              el minimo vector del otro valor 
              
              */ 

              var p2_x1 = document.querySelector('#p2-x1').value;
              var p2_x2 = document.querySelector('#p2-x2').value;
              var p2_x3 = document.querySelector('#p2-x3').value;
              var p2_x4 = document.querySelector('#p2-x4').value;
              var p2_x5 = document.querySelector('#p2-x5').value;

              var p2_y1 = document.querySelector('#p2-y1').value;
              var p2_y2 = document.querySelector('#p2-y2').value;
              var p2_y3 = document.querySelector('#p2-y3').value;
              var p2_y4 = document.querySelector('#p2-y4').value;
              var p2_y5 = document.querySelector('#p2-y5').value;

              //contruir el vector
              var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
              var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

              //ordenar los elementos del vector

              v1 = v1.sort(function (a, b){
                            return b-a;
              });

              v2 = v2.sort(function (a, b){
                            return b-a;
              });

              //invertir el vector
              v2 = v2.reverse();

              //producto
              var p2_producto = 0;

              for(var i = 0; i < v1.length; i++){
                            p2_producto += v1[i]*v2[i];
              }

              document.querySelector('#p2-output').textContent = 'Producto escalar minimo :' + p2_producto;


}

function pro3(){


              const abecedario= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","R","S","T","U","V","W","X","Y","Z"];
              
              let valor = document.querySelector('#p3-input').value;

              //FALTA HACER LA VERIFICACION DE QUE SOLO SEAN NUMEROS
              let var_limpio = valor.replace(/ /g, "");
              var_limpio = var_limpio.toUpperCase();

              


              let lista_numeros = [" "];

              palabras = var_limpio.split(",");
              console.log(Array.from('foo'));
              
              
              for(let i; i<palabras.length; i++){//AQUI SE ESTA RECORRIENDO PALABRA POR PALABRA
                            let numero =0
                            let repite=0
                            
                            let lista_existe = [" "];

                            letras = Array.from(palabras[i]);//AQUI SE ESTA DESCOMPONIENDO LA PALABRA EN ARRAY (LETRA POR LETRA)

                            for(let j; j<letras.length; j++){//A QUI SE ESTA OBTENIENDO LETRA POR LETRA DE LA PALABRA
                                          
                                          for(let k; k<abecedario.length; k++){//AQUI SE ESTA COMPARANDO CADA LETRA DE LA PALABRA CON TODO EL ABECEDARIO

                                                        if(letras[j]==abecedario[k]){

                                                                      for(let v; v<lista_existe.length; v++){

                                                                                    //ALGO ESTA MAL POR QUE VA A SUMAR CADA VEZ LA LETRA SI VE QUE NO ESTA
                                                                                    if(abecedario[k]==lista_existe[v]){
                                                                                                  //NO HACE NADA
                                                                                    }else{
                                                                                                  numero = numero + 1;
                                                                                                  lista_existe.push(abecedario[k]);
                                                                                    }
                                                                      }

                                                                                    

                                                        }

                                          }
                            }
                                                        
              }
              //alert(valor.replace(/ /g, ""));
              
              if(true){
                            palabras =valor.split('\n') 
              }else{
                            alert("Solo se admiten letras y numeros")
              }
              


}

/*
problema 3
primero mi alfabeto a - z
identificar la coma   varible.split(',')
eliminar los espacios   
habia, un, patito, que, decia, miau, miau
4 (h, a, b, i)
2 (u, n)
5 (p, a, t, i, o)
variable que se encargue de iterar la palabra
guardando los caracteres unicos
un bucle dentro de otro bucle
wiiiiiiiiiiiiiiii uwu/
*/