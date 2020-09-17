var articulos = [
  { nombre: "Bicicleta", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 350 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Auriculares", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
}); //el filter me agrega al nuevo array lo que estoy buscando. Genera nuevo array

articulosFiltrados

var nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
}); //map es otra funcion para recorrer arrays, que me trae solo lo que le pido. Genera nuevo array

nombreArticulos

// estas son dos formas de filtrar y recorrer los arrays.

var encuentraArticulo = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop"
}); //genera nuevo array.

articulos.forEach(function(articulo){
  console.log(articulo.nombre);
}); //este no genera un nuevo array.

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 1000;
}); //genera nuevo array con true o false.