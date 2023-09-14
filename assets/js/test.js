const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const gameBoard = document.querySelector('.game-board');
const clounds = document.querySelector('.clounds');
const btn = document.querySelector('.restart')
//Const pour faire sauter le 'player'
const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
        // Le '500' vient des millisecondes de la classe de .jump du CSS
    }, 500);
}

// Constant pour quand finir le jeu
const endGame = () => {
    setTimeout(() => {
        gameBoard.classList.add('gameOver');
        clounds.classList.add("hidden");
        player.classList.add("hidden");
        obstacle.classList.add("hidden");
        gameBoard.style.border = '0';
        // window.location = "http://advergame/pages/form.php";
    }, 3000);
}

//Pour recommencer le jeu
let life = 2;
btn.addEventListener('click', () => {
    setTimeout(()=>{
        start();
    }, 1000)
})

//Function pour commencer le jeu
function start() {

    // Je déclenche la constant "jump" en appuyant sur une touche
    document.addEventListener('keydown', jump);

    // Je rajoute les éléments
    obstacle.classList.remove("obstacle");
    obstacle.classList.add("obstacle");
    obstacle.classList.remove("hidden");
    btn.classList.add("hidden");
    player.src = "../assets/img/player.gif";

    const loop = setInterval(() => {
        const obstaclePosition = obstacle.offsetLeft;
        //Pour trouver la valeur du fond du 'player' et changer le valeur en 'string' pour vide
        const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
        // Condition pour trouver la position du 'obstacle' et du 'player' après avoir sauté le 'obstacle'
        if (obstaclePosition <= 90 && obstaclePosition > 0 && playerPosition < 150) {
            life--;

            setTimeout(() => {

                obstacle.classList.add("hidden");
    
            }, 500);
            clearInterval(loop);
            document.removeEventListener('keydown', jump);

            // obstacle.style.animation = 'none';
            // obstacle.style.left = `${obstaclePosition}px`;
            // player.style.animation = 'none';
            // player.style.bottom = `${playerPosition}px`;
            player.src = "../assets/img/sad.gif";

            if (life <= 0) {
                endGame();
            } else {

                btn.classList.remove("hidden");
            }
        } 
    }, 10)
}

start();