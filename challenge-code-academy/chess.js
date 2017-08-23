let userChoise;
let newChoise;
let AIChoise = Math.floor(Math.random() * 3 + 1);
let myButton = document.querySelector("button");
let mySpan = document.querySelector("span");
let myTitle = document.querySelector("h2");

function jokenpo() {
  function AI() {
    if (AIChoise == 1) AIChoise = "pedra";
    else if (AIChoise == 2) AIChoise = "tesoura";
    else AIChoise = "papel";
  }
  AI();

  userChoise = prompt("Qual sua escolha? Pedra, Papel ou Tesoura?");
  newChoise = userChoise.toLowerCase();
  if (newChoise == "pedra" || newChoise == "papel" || newChoise == "tesoura") {
    return newChoise;
  } else if (
    newChoise !== "pedra" ||
    newChoise !== "papel" ||
    newChoise !== "tesoura"
  ) {
    alert("Digite corretamente, por favor.");
    jokenpo();
  }
}

function battle() {
  if (
    (newChoise == "papel" && AIChoise == "papel") ||
    (newChoise == "pedra" && AIChoise == "pedra") ||
    (newChoise == "tesoura" && AIChoise == "tesoura")
  ) {
    mySpan.textContent = "Empate!";
  } else if (
    (newChoise == "papel" && AIChoise == "pedra") ||
    (newChoise == "tesoura" && AIChoise == "papel") ||
    (newChoise == "pedra" && AIChoise == "tesoura")
  ) {
    mySpan.textContent = "Vitória!!!";
  } else {
    mySpan.textContent = "Derrota!";
  }
}

myButton.onclick = function() {
  let hasUsed = true;
  jokenpo();
  if (hasUsed) {
    battle();
    setTimeout(() => {
      if (mySpan.textContent != "") {
        mySpan.textContent = "Clique e jogue novamente!";
      }
    }, 5000);
  }
};
