var estudiantes = ["Maria", "Sergio", "Juan", "Daniel"];
function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){ //mientras lo que esta entre parentesis se cumpla, va a funcionar lo que sigue.
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}