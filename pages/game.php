<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.game.css">
    <title>Game Adver-Chanllege</title>
</head>

<body>
    <main class="game-board">
        <div class="score"></div>
        <div class="lifeCounter"></div>
        <div class="timming"></div>
        <button class="restart hidden">Rejouer</button>
        <img class="clounds" src="../assets/img/clouds.png" alt="clounds">
        <img class="player" src="../assets/img/player.gif" alt="player">
        <img class="obstacle" src="../assets/img/obstacle.png" alt="obstacle">
    </main>
    <script src="../assets/js/script.home.js"></script> 
    <div src="../pages/form.php"></div>
</body>
<script>
    // Déclarez des variables globales pour le score actuel et le score maximal
let currentScore = 0; // Score actuel
let maxScore = 0;     // Score maximal atteint

function start() {
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
        // Lorsque le joueur n'a plus de vies, terminez le jeu
        setTimeout(() => {
          endGame();
        }, 3000);
      } else {
        // Lorsque le joueur a encore des vies, montrez le bouton de redémarrage
        btnRestart.classList.remove("hidden");
      }
    } else {
      // Mettez à jour le score actuel uniquement si le joueur n'a pas perdu
      // Ne réinitialisez pas le score actuel ici
      score.innerHTML = `Score: ${currentScore}`;
    }
  }, 10);
}
</script>
</htm>