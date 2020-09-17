function auto(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
} //esta es la funcion constructora.

var marca = ["Nissan", "Chevrolet", "Fiat", "Volkswaguen", "Ford", "Ferrari", "Peugeot", "Toyota", "Cherry", "Jeep", "Mercedes-Benz", "Tesla"];
var modelo = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9", "x10", "x11", "x12"];
var año = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];

for(var i = 0; i < marca.length; i++) {
  var nuevoAuto = new auto(marca, modelo, año);
  nuevoAuto.marca = marca[i];
  nuevoAuto.modelo = modelo[i];
  nuevoAuto.año = año[i];
  console.log(nuevoAuto);
}


// var autoNuevo = new auto("Tesla", "Model 3", 2020); //asi se genera un nuevo objeto dentro del constructor.
// var autoNuevo2 = new auto("Toyota", "Corola", 2018);
// var autoNuevo3 = new auto("Fiat", "Duna", 1998);