<?php

require_once $_SERVER["DOCUMENT_ROOT"] . "../traitement/traitement.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.game.css">
    <link rel="stylesheet" href="../assets/css/game_user.css">
    <style>
    
    </style>
    <title>Game Adver-Chanllege</title>
</head>

<body>
<main class="game-board">
        <div class="name_user">
                    <p>
                        Player Name : 
                    </p>
                    <p>
                        <?php echo  $_SESSION['prenomDernierUtilisateur']?>
                    </p>
                </div>
          

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

</html>