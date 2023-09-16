const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const gameBoard = document.querySelector('.game-board');
const btn = document.querySelector('.restart');
const clounds = document.querySelector('.clounds');



const jump = () => {

    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

let life = 2;
btn.addEventListener('click', () => {
    start();
})

const endGame = () => {
    clounds.classList.add("hidden");
    player.classList.add("hidden");
    obstacle.classList.add("hidden");
    gameBoard.style.border='0';    
    gameBoard.classList.add('gameOver');

    setTimeout(() => {
        window.location = "http://rugby/pages/form.php";
    }, 3000);
}


function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let countdown = 3; // Compte à rebours de 3 secondes

    const countdownInterval = setInterval(() => {
        if (countdown === 0) {
            countdownElement.textContent = "GO!";
            clearInterval(countdownInterval); // Arrête le compte à rebours

            // Déclenche le jeu après "GO!"
            setTimeout(() => {
                countdownElement.textContent = ""; // Efface le texte
                startGame();
            }, 1000); // Attendez 1 seconde après "GO!" avant de commencer le jeu
        } else {
            countdownElement.textContent = countdown.toString();
            countdown--;
        }
    }, 1000); // Met à jour le compteur toutes les 1000 millisecondes (1 seconde)
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown(); // Commence le compte à rebours dès que la page est chargée
});

btn.addEventListener('click', () => {
    startCountdown(); // Au lieu de startGame()
});




function startGame() {

    document.addEventListener('keydown', jump);

    obstacle.classList.remove("obstacle");
    obstacle.classList.add("obstacle");
    obstacle.classList.remove("hidden");

    player.src = "../assets/img/player.gif";
    btn.classList.add("hidden");

    const loop = setInterval(() => {
        const obstaclePosition = obstacle.offsetLeft;
        const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

        if (obstaclePosition <= 50 && obstaclePosition > 0 && playerPosition < 137) {
            life--;

            setTimeout(() => {

                obstacle.classList.add("hidden");
            }, 500);

            clearInterval(loop);
            document.removeEventListener('keydown', jump);

            //player.style.animation = 'none';
            //player.style.bottom = `${playerPosition + 10}px`;
            player.src = "../assets/img/sad.gif";

            if (life <= 0) {
                endGame();
            } else {
                btn.classList.remove("hidden");
            }
        }
    }, 10);
}





