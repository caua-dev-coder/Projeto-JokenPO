const result = document.querySelector(".result");
const MyP = document.querySelector("#MyPoints");
const MachineP = document.querySelector("#MachinePoints");
let HumanScore = 0
let MachineScore = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Deu Empate :|";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper") ||
    (human === "rock" && machine === "scissors")
  ) {
    HumanScore++
    MyP.innerHTML = HumanScore 
    result.innerHTML = "Você Ganhou ;)";
  } else {
    MachineScore++
    MachineP.innerHTML = MachineScore
    result.innerHTML = "Você perdeu para Alexa :(";
  }
};
