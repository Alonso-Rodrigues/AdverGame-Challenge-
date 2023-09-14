<?php

// require_once $_SERVER["DOCUMENT_ROOT"] . "../pages/form.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.game.css">
    <title>Game Adver-Chanllege</title>
</head>

<body>
   

    <div class="game-board">
        <span class="score"><?php echo $prenomDernierUtilisateur['prenom'] ?></span>
       
        <button class="restart hidden">Rafraîchir</button>
        <img class="clounds" src="../assets/img/clouds.png" alt="clounds">
        <img class="player" src="../assets/img/player.gif" alt="player">
        <img class="obstacle" src="../assets/img/obstacle.png" alt="obstacle">
    </div>
    <script src="../assets/js/script.home.js"></script>
 
</body>

</html>