var miAuto = {
  marca: "Toyota", //se utiliza , (coma) para agregar mas propiedades.
  modelo: "Corola",
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.año}`);
  },
  año: 2020 //si no se agregan mas propiedades no te utiliza ,
}; //esto es un objeto

miAuto.marca //con . (punto) ingreso a la propiedad que estoy buscando..
miAuto.detalleDelAuto();
