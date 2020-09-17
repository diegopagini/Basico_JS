const juego = () => {
  const electionPlayer = prompt("¿piedra, papel ó tijera?");
  const options = ["piedra", "papel", "tijera"];
  const electionMachine = options[Math.floor(Math.random() * options.length)];

  if (electionMachine === "piedra") {
    if (electionPlayer === "tijera") {
      console.log("Perdiste");
    }
    else if(electionPlayer === "papel") {
      console.log("Ganaste")
    } else {
      console.log("Empatamos")
    }
  }
  else if(electionMachine === "papel") {
    if (electionPlayer === "tijera") {
      console.log("Ganaste");
    }
    else if(electionPlayer === "piedra") {
      console.log("Perdiste");
    } else {
      console.log("Empatamos")
    }
  }
  else if(electionMachine === "tijera") {
    if (electionPlayer === "papel") {
      console.log("Ganaste");
    }
    else if(electionPlayer === "piedra") {
      console.log("Perdiste");
    } else {
      console.log("Empatamos");
    }
  }
}

juego();