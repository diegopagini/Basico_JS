var player1 = "piedra";
var player2 = "papel";

switch (true) {
  case player1 === "piedra" && player2 === "piedra":
    console.log("empate");
    break;
  case player1 === "tijera" && player2 === "tijera":
    console.log("empate");
    break;
  case player1 === "papel" && player2 === "papel":
    console.log("empate");
  break;
  case player1 === "piedra" && player2 === "papel":
    console.log("gana player 2");
    break;
  case player1 === "piedra" && player2 === "tijera":
    console.log("gana player 1");
    break;
  case player1 === "papel" && player2 === "piedra":
    console.log("gana player 1");
    break;
  case player1 === "papel" && player2 === "tijera":
    console.log("gana player 2");
    break;
  case player1 === "tijera" && player2 === "piedra":
    console.log("gana player 2");
    break;
  case player1 === "tijera" && player2 === "papel":
    console.log("gana player 1");
    break;
  default : console.log("no han elegido bien");
}