
/* 
nombre = 'vilchez'; 
console.log(nombre);

let nombrecompleto = "JOSE VILCHEZ";
console.log(nombrecompleto);
*/
let n = 0, print= '';

if (n !== 0){
    if (n > 0){
      if(n % 2 === 0){
        print = `El número ${n} es PAR POSITIVO`;
      } else {
        print = `El número ${n} es IMPAR POSITIVO`;
      }
    } else { 
        if (n % 2 === 0){
            print = `El número ${n} es PAR NEGATIVO`;
        } else {
            print = `El número ${n} es IMPAR NEGATIVO`;

        }
    } 
} else { 
    print = `EL NUMERO ${n} ES NEUTRO`;
}
