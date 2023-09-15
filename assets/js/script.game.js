const player = document.querySelector(".player");
const sad = document.querySelector(".sad");
const obstacle = document.querySelector(".obstacle");
const gameBoard = document.querySelector(".game-board");
const clounds = document.querySelector(".clounds");
const btn = document.querySelector(".restart");
const score = document.querySelector(".score");
const lifeCounter = document.querySelector(".lifeCounter");
const timming = document.querySelector(".timming");

//Const pour faire sauter le 'player'
const jump = () => {
  player.classList.add("jump");

  setTimeout(() => {
    player.classList.remove("jump");
    // Le '500' vient des millisecondes de la classe de .jump du CSS
  }, 500);
};

// Constant pour quand finir le jeu
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
    window.location = "http://advergame/pages/form.php";
  }, 5000);
};

//Pour recommencer le jeu
btn.addEventListener("click", () => {
  setTimeout(() => {
    start();
  }, 1000);
});

// L'utilisateur commence avec deux vies, je change de classe en HTML
let life = 2;
function updateLife() {
  lifeCounter.innerHTML = `Life: ${life}`;
}
//Fonction pour perdre une vie à chaque collision et mettre à jour l'affichage
function decreaseLife() {
  life--;
  updateLife();
}

//Function pour commencer le jeu
function start() {

  function countDown(){
    if(time > 0){
      timming.innerHTML = time;
      time-1;
    } 
    else{
      setTimeout(() => {
        countDown();
      }, 1000);
    }
  }
 

  // Je déclenche la constant 'jump' en appuyant sur une touche
  document.addEventListener("keydown", jump);

  // Je rajoute les éléments, la class 'hiden' viens du CSS
  obstacle.classList.remove("obstacle");
  obstacle.classList.add("obstacle");
  obstacle.classList.remove("hidden");
  btn.classList.add("hidden");
  score.classList.add("score");
  obstacle.classList.remove("hidden");
  player.classList.remove("style.botton");
  player.src = "../assets/img/player.gif";
  // Je déclare la variable count égale à zéro, pour commencer le 'score'
  let count = 0;

  // Constant 'loop' du intervale du jeu à la colison
  const loop = setInterval(() => {

    // J'appelle la fonction 'life', en la mettant à jour à chaque fois
    updateLife();

    // Un incrément de la variable 'let count = 0;' toutes les dix mille secondes est imprimé sur le 'score'
    count++;
    score.innerHTML = `Score: ${count}`;

    const obstaclePosition = obstacle.offsetLeft;
    //Pour trouver la valeur du fond du 'player' et changer le valeur en 'string' pour vide
    const playerPosition = +window
      .getComputedStyle(player)
      .bottom.replace("px", "");
    // Condition pour trouver la position du 'obstacle' et du 'player' après avoir sauté le 'obstacle'
    if (
      obstaclePosition <= 90 &&
      obstaclePosition > 0 &&
      playerPosition < 150
    ) {
      decreaseLife();
      setTimeout(() => {
        obstacle.classList.add("hidden");
      }, 100);

      //J'arrête le 'loop'
      clearInterval(loop);

      // J'empêche de 'jump' après les collisions et j'ajoute le nouveau gif 'sad'
      document.removeEventListener("keydown", jump);
      player.src = "../assets/img/sad.gif";
      // player.style.bottom = `${playerPosition}px`;

      // Si la 'life' est égale ou inférieure à zéro, endgame(). Sinon je recommence la boucle
      if (life <= 0) {
        setTimeout(()=>{
          endGame();
        }, 3000)
      } else {
        btn.classList.remove("hidden");
      }
    }
  }, 10);
}
start();
 time--;