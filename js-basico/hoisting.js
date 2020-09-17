var miNombre = undefined;
console.log(miNombre + "soy ese hoisting"); //la inicializo antes de enviarla. Por eso el hoistin "undefined"
miNombre = "Diego";



hey(); //la estoy iniciando antes de definirla

function hey() { //aca se esta definiendo
  console.log("Hola " + miNombre);
}

//para evitar eso indicar las variables antes de las funciones. Como buena practia hacerlas siempre al principio del codigo. Asi se evita el hoisting.