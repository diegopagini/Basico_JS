import { func } from "prop-types";

var estudiantes = ["1","2","3","4"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

while(estudiantes.length > 0){
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}


function auto(marca, modelo, año) {
  this.marca = marca;
  this.modeo = modelo;
  this.año = año;
}

var autoNuevo = new Auto("Tesla","Model 3", 2020);

