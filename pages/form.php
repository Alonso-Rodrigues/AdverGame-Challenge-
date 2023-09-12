<?php
// require_once $_SERVER["DOCUMENT_ROOT"]."../connection/connect.php";
// // vérification de la connexion à la base de données:
// // if($dbname){
// //     var_dump("Connexion réussie à la base de données");
// // } else {
// //     var_dump("Erreur de connexion à la base de données !");
// // }

require_once $_SERVER["DOCUMENT_ROOT"]."../connection/connect.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifique se os campos do formulário foram definidos antes de acessá-los
    if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['phone'])) {
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        // Préparer la statement
        $stmt = $db->prepare("INSERT INTO user (nom, prenom, email, phone) VALUES (:nom, :prenom, :email, :phone)");

        // Bind paramètres
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);

        // Exécuter statement
        if ($stmt->execute()) {
            echo "Enregistrement réussi.";
        } else {
            echo "Erreur lors de l'enregistrement.";
        }
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.form.css">
    <title>Form Adver Game</title>
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Retour au menu</a></li>
                <li><a href="#">Rejouer</a></li>
                <li><a href="#">Quitter le jeu</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <div class="container">
                <h3>Remplissez le formulaire por jouer</h3>
                <form method="post" action="form.php">
                    <label for="nom">Nom</label>
                    <input type="text" name="nom">
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom">
                    <label for="email">Email</label>
                    <input type="text" name="email">
                    <label for="phone">Phone</label>
                    <input type="text" name="phone">
                    <button type="submit">Rejouer</button>
                </form>
            </div>
        </section>
    </main>
    <footer>
        All rights reserved to Alonso Rodrigues and Kostandin Fakaj
    </footer>
</body>

</html>