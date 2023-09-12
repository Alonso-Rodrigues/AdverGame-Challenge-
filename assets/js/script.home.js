const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');
const score = document.querySelector('.score');

const jump = () => {

    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

let life = 2;
const restartGame = () => {
    obstacle.style.left = '-200px';
}
const loop = setInterval(()=>{
    const obstaclePosition = obstacle.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

    if(obstaclePosition <= 50 && obstaclePosition > 0 && playerPosition < 137){
        life--;
        if(life <= 0){
            restartGame();
            
             setTimeout(() => {
                window.location = "http://advergame/pages/game.html";
            }, 3000); 
            
            // clearInterval(loop);

            setTimeout(() => {
                window.location = "http://advergame/pages/form.php";
            }, 3000); 
        } else {
            obstacle.style.animation = 'none';
            obstacle.style.left = `${obstaclePosition}px`;

            player.style.animation = 'none';
            player.style.bottom = `${playerPosition + 10}px`;
            player.src="../assets/img/sad.gif";
        }
    }
}, 10);
document.addEventListener('keydown', jump);


