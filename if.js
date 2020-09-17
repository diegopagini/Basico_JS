//condicionales

if (true)//lo que va aca tiene que ser verdad
{
console.log("Hola");
} else //si es falso se usa el else. No hace falta poner ().
{
console.log("Soy falso");
}
//else if () { si no es if, puede ser else if, y si ya no es eso si va el else solo.}

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, será tu primera votación");
} else if ( edad > 18 ) {
  console.log("Puees votar de nuevo");
} else {
  console.log("No puedes votar aun");
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";