const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const gameBoard = document.querySelector('.game-board');
const clounds = document.querySelector('.clounds');
const btn = document.querySelector('.restart')
const score = document.querySelector('.score');

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
        clounds.classList.add('hidden');
        player.classList.add('hidden');
        obstacle.classList.add('hidden');
        score.classList.add('hidden');
        gameBoard.style.border = '0';
        // window.location = 'http://advergame/pages/form.php';
    }, 3000);
}

//Pour recommencer le jeu
let life = 2;
btn.addEventListener('click', () => {
    setTimeout(()=>{
        start();
    }, 1000)
})

// Je déclare la variable count égale à zéro
let count = 0;

//Function pour commencer le jeu
function start() {

    // Je déclenche la constant 'jump' en appuyant sur une touche
    document.addEventListener('keydown', jump);

    // Je rajoute les éléments
    // Ps: Class 'hiden' viens du CSS
    obstacle.classList.remove('obstacle');
    obstacle.classList.add('obstacle');
    obstacle.classList.remove('hidden');
    btn.classList.add('hidden');
    score.classList.add('score');
    player.src = '../assets/img/player.gif';

    // Constant 'loop' du intervale du jeu à la colison
    const loop = setInterval(() => {

        // Un incrément de la variable 'let count = 0;' toutes les dix mille secondes est imprimé sur le 'score'
        count++
        score.innerHTML = `Score: ${count}`;

        const obstaclePosition = obstacle.offsetLeft;
        //Pour trouver la valeur du fond du 'player' et changer le valeur en 'string' pour vide
        const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
        // Condition pour trouver la position du 'obstacle' et du 'player' après avoir sauté le 'obstacle'
        if (obstaclePosition <= 90 && obstaclePosition > 0 && playerPosition < 150) {                  
            life--;
            setTimeout(() => {

                obstacle.classList.add('hidden');
    
            }, 500);
            
            clearInterval(loop);

            // J'empêche de 'jump' après le premier après
            document.removeEventListener('keydown', jump);
            player.src = '../assets/img/sad.gif';

            // Si la 'life' est égale ou inférieure à zéro, endgame(). Sinon je recommence la boucle 
            if (life <= 0) {
                endGame();
            } else {

                btn.classList.remove('hidden');
            }
        }
    }, 10)
}
start();
