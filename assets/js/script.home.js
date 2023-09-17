const player = document.querySelector(".player");
const sad = document.querySelector(".sad");
const obstacle = document.querySelector(".obstacle");
const gameBoard = document.querySelector(".game-board");
const clounds = document.querySelector(".clounds");
const btnRestart = document.querySelector(".restart");
const score = document.querySelector(".score");
const lifeCounter = document.querySelector(".lifeCounter");
const timming = document.querySelector(".timming");


const jump = () => {
  player.classList.add("jump");

  setTimeout(() => {
    player.classList.remove("jump");
  }, 500);
};

const endGame = () => {
  gameBoard.classList.add("gameOver");
  clounds.classList.add("hidden");
  player.classList.add("hidden");
  obstacle.classList.add("hidden");
  score.classList.add("hidden");
  lifeCounter.classList.add("hidden");
  gameBoard.style.border = "0";
  score;

  setTimeout(() => {
    window.location = "http://rugby/pages/form.php";
  }, 5000);
};

btnRestart.addEventListener("click", () => {
  setTimeout(() => {
    start();
  }, 2000);
});

let life = 2;

function decreaseLife() {
  life--;
  updateLife();
}

function updateLife() {
  lifeCounter.innerHTML = `Life: ${life}`;
}

function countdown(time) {
  if (time >= 0) {
    lifeCounter.classList.add("hidden");
    score.classList.add("hidden");
    obstacle.classList.add("hidden");

    setTimeout(() => {
      timming.textContent = time;
      countdown(time - 1);
    }, 1000);
  } else {
    setTimeout(() => {
      timming.textContent = "GO!";
      start();
    }, 1000);
  }
}

countdown(3);
let currentScore = 0; // Score actuel
let maxScore = 0;     // Score maximal atteint

function start() {
  if (life === 2) {
    // Réinitialisez le score actuel uniquement lorsque le jeu commence
    currentScore = 0;
  }
  updateLife(); // Mettez à jour le compteur de vies
  document.addEventListener("keydown", jump);
  player.classList.remove("style.botton");
  player.src = "../assets/img/player.gif";
  btnRestart.classList.add("hidden");
  score.classList.add("score");
  player.style.bottom = "";


  setTimeout(() => {
    timming.classList.add("hidden");
    lifeCounter.classList.remove("hidden");
    score.classList.remove("hidden");
  }, 1000);
  setTimeout(() => {
    obstacle.classList.remove("hidden");
  }, 2000);

  const loop = setInterval(() => {
    const obstaclePosition = obstacle.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace("px", "");

    if (obstaclePosition <= 90 && obstaclePosition > 0 && playerPosition < 150) {
      decreaseLife();
      setTimeout(() => {
        obstacle.classList.add("hidden");
      }, 100);
      clearInterval(loop);
      document.removeEventListener("keydown", jump);
      player.src = "../assets/img/sad.gif";
      player.style.bottom = "1px";
      if (life <= 0) {
        // Lorsque le joueur n'a plus de vies, affiche le score maximal et termine le jeu
        if (currentScore > maxScore) {
          maxScore = currentScore; // Mettez à jour le score maximal
        }
        score.innerHTML = `Score maximal: ${maxScore}`;
        setTimeout(() => {
          endGame();
        }, 3000);
      } else {
        // Lorsque le joueur a encore des vies, montrez le bouton de redémarrage
        btnRestart.classList.remove("hidden");
      }
    } else {
      // Mettez à jour le score actuel uniquement si le joueur n'a pas perdu
      score.innerHTML = `Score: ${currentScore}`;
      currentScore++; // Mettez à jour le score actuel
    }
  }, 10);
}
