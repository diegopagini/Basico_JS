var player1 = "piedra";
var player2 = "papel";

if (player1 === "piedra" && player2 === "piedra") {
  console.log("empate");
} else if (player1 === "tijera" && player2 === "tijera") {
  console.log("empate");
} else if (player1 === "papel" && player2 === "papel") {
  console.log("empate");
} else if (player1 === "piedra" && player2 === "papel") {
  console.log("gana player 2");
} else if (player1 === "piedra" && player2 === "tijera") {
  console.log("gana player 1");
} else if (player1 === "papel" && player2 === "piedra") {
  console.log("gana player 1");
} else if (player1 === "papel" && player2 === "tijera") {
  console.log("gana player 2");
} else if (player1 === "tijera" && player2 === "piedra") {
  console.log("gana player 2");
} else if (player1 === "tijera" && player2 === "papel") {
  console.log("gana player 1");
}