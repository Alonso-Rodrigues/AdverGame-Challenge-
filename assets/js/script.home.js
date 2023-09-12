const player = document.querySelector('.player')

const jump = () =>{
    player.classList.add('jump');
}
document.addEventListener('keydown', jump);