<?php
session_start(); // Démarrer la session au début du script

require_once $_SERVER["DOCUMENT_ROOT"] . "../connection/connect.php";

// Vérifier si la session de succès n'est pas définie, rediriger vers le formulaire

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Vérifiez si les champs du formulaire ont été définis avant de les accéder
    if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['phone'])) {
        $nom = htmlspecialchars($_POST['nom']);
        $prenom = htmlspecialchars($_POST['prenom']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);

        // Préparer la statement
        $stmt = $db->prepare("INSERT INTO user (nom, prenom, email, phone) VALUES (:nom, :prenom, :email, :phone)");

        // Exécuter statement  
        if ($stmt->execute([':nom' => $nom,
            ':prenom' => $prenom,
            ':email' => $email,
            ':phone' => $phone
        ])) 
        {
            $_SESSION['success'] = "Félicitations pour votre inscription"; // Message de succès

            // Récupérer l'ID de l'utilisateur inscrit
            $lastInsertedID = $db->lastInsertId();

            // Sélectionner le prénom de l'utilisateur inscrit
            $selectStmt = $db->prepare("SELECT prenom FROM user WHERE id_user = :id");
            $selectStmt->execute([':id' => $lastInsertedID]);
            $row = $selectStmt->fetch();
           

            // Afficher le prénom de l'utilisateur inscrit
            if ($row) {
                $prenomDernierUtilisateur = $row['prenom'];
                echo "Le prénom du dernier utilisateur inscrit est : $prenomDernierUtilisateur";
            }
        } else {
            $_SESSION['failure'] = "Erreur lors de l'inscription";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.form.css">
    <style>
        ul{
            display:flex;
            flex-direction:column;
        }
        #message{
            color:white;
        }
        .success-message{
            color:#599cc8;
            font-size:25px;
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
                    echo '<h1 id="message" style="display: none;">Veuillez remplir le formulaire pour jouer à nouveau.</h1>';

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
              
                <form method="post" action="form.php">
                    <label for="nom">Nom</label>
                    <input type="text" name="nom" required>
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" required>
                    <label for="email">Email</label>
                    <input type="email" name="email" required>
                    <label for="phone">Phone</label>
                    <input type="text" name="phone" required>
                    <button type="submit">Inscrivez</button>
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
