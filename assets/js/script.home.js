const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const gameBoard = document.querySelector('.game-board');
const btn = document.querySelector('.restart')

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

    gameBoard.classList.add('gameOver');

    setTimeout(() => {
        window.location = "http://rugby/pages/form.php";
    }, 3000);
}

function start() {

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

start();

