let userChoise;
let AIChoise = Math.floor(Math.random() * 3 + 1);

function user() {
  userChoise = prompt("Qual sua escolha? Pedra, Papel ou Tesoura?");
  if (
    userChoise.toLowerCase() == "pedra" ||
    userChoise.toLowerCase() == "papel" ||
    userChoise.toLowerCase() == "tesoura"
  ) {
    return userChoise;
  } else if (
    userChoise !== "pedra" ||
    userChoise !== "papel" ||
    userChoise !== "tesoura"
  ) {
    alert("Digite corretamente, por favor.");
    user();
  }
}
user();

function AI() {
  if (AIChoise == 1) AIChoise = "pedra";
  else if (AIChoise == 2) AIChoise = "tesoura";
  else AIChoise = "papel";
}
AI();

function battle() {
  if (
    (userChoise == "papel" && AIChoise == "papel") ||
    (userChoise == "pedra" && AIChoise == "pedra") ||
    (userChoise == "tesoura" && AIChoise == "tesoura")
  ) {
    alert("Empate!");
  } else if (
    (userChoise == "papel" && AIChoise == "pedra") ||
    (userChoise == "tesoura" && AIChoise == "papel") ||
    (userChoise == "pedra" && AIChoise == "tesoura")
  ) {
    alert("Vitória!!!");
  } else {
    alert("Derrota!");
  }
}
battle();

console.log(`Escolha do adversário: ${AIChoise}`);
console.log(`Sua escolha: ${userChoise}`);
