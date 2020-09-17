//son ciclos. Se recorren en la funcion mientras algo sea verdad.

var estudiantes = ["Diego", "Ariadna", "Sara", "Raul"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}