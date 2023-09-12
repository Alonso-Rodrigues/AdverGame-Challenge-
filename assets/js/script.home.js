const player = document.querySelector('.player');
const obstable = document.querySelector('.obstacle');

const jump = () => {

    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

let life = 2;
let gameEnded = false;
const loop = setInterval(() => {
    const obstablePosition = obstable.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    console.log(playerPosition);

    if (obstablePosition <= 50 && obstablePosition > 0 && playerPosition < 150) {
        life--;

        if (life <= 0) {
            gameEnded = true;
            clearInterval(loop);
            window.location = "http://advergame/pages/form.php";

        } else {
            obstable.style.animation = 'none';
            obstable.style.left = `${obstablePosition}px`;

            player.style.animation = 'none';
            player.style.bottom = `${playerPosition}px`;
            player.src = "../assets/img/sad.gif"
        }
    }
}, 10)

document.addEventListener('keydown', jump);