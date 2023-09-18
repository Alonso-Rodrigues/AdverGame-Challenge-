<?php
require_once $_SERVER["DOCUMENT_ROOT"] . "../traitement/traitement.php";

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.form.css">
    <style>
    ul {
        display: flex;
        flex-direction: column;
    }

    #message {
        color: white;
    }

    .success-message {
        color: #599cc8;
        font-size: 25px;
    }
    </style>
    <title>Form Adver Game</title>
</head>

<body>
    <header>
        <nav>
            <ul>
                <?php
                // Vérifiez si l'utilisateur est connecté (c'est-à-dire si $_SESSION['success'] est défini)
                if (isset($_SESSION['success']) && !empty($_SESSION['success'])) {
                    echo '<li><a href="game_user.php">Rejouer</a></li>';
                } else {
                    echo '<li><a href="#" id="rejouer-link">Rejouer</a></li>';
                    echo '<h1 id="message" style="display: none;">Veuillez remplisez le formulaire pour jouer à nouveau.</h1>';

                }
            ?>
            </ul>
        </nav>
    </header>
    <main>
        <section>

            <?php
            // Vérifiez si $_SESSION['success'] est défini et non vide
            if (isset($_SESSION['success']) && !empty($_SESSION['success'])) {
                echo '<div class="success-message">' . $_SESSION['success'] . '</div>';
                unset( $_SESSION['success']);
            }
        ?>


            <div class="container">

                <form method="post" action="">
                    <label>Veuillez remplisez le formulaire pour jouer à nouveau.</label>
                    <label for="nom">Nom</label>
                    <input type="text" name="nom" required>
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" required>
                    <label for="email">Email</label>
                    <input type="email" name="email" required>
                    <label for="phone">Phone</label>
                    <input type="text" name="phone" required>
                    <button type="submit">Inscrivez-vous</button>
                </form>
            </div>
        </section>
    </main>
    <footer>
        All rights reserved to Alonso Rodrigues and Kostandin Fakaj
    </footer>
    <script src="../assets/js/message.js"></script>
</body>

</html>