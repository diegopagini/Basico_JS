//[] //estructura de datos. Lista que guarda valores.

var frutas = ["Manzana", "Banana", "Cereza", "Pera"]; //forma del array

console.log(frutas);//se accede a todo e array
console.log(frutas[0]);//solo se accese a un item del aray

var masFrutas = frutas.push("Uvas"); //push añade elementos al final del array. 
var menosFrutas = frutas.pop("Uvas"); //elimina el ultimo elemento del array
var nuevaLongitud = frutas.unshift("Kiwi"); //añade elementos, pero al principio del array.
var borrarFruta = frutas.shift("Kiwi"); //borra el primer item del array.
var posicion = frutas.indexOf("Cereza"); //me dice en que posicion se encuentra el item dentro del array.