<?php
require_once $_SERVER["DOCUMENT_ROOT"]."../connection/connect.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Verifique se os campos do formulário foram definidos antes de acessá-los
    if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['phone'])) {
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/'; 
        if (!preg_match($regex, $_POST['email'])) {
        echo  " <p class='message_email'> Veuillez remplisez tout les champs </p>"  ;

        }else {

            // Préparer la statement
            $stmt = $db->prepare("INSERT INTO user (nom, prenom, email, phone) VALUES (:nom, :prenom, :email, :phone)");
            
            // Exécuter statement  
            if($stmt->execute([':nom' => $nom, 
            ':prenom' => $prenom,
            ':email' => $email, 
            ':phone' => $phone
            ])) {

                $_SESSION['success'] = "Vous etez bien inscrit";
              
                header("Location: game.html");
            } else {
                echo "Erreur lors de l'enregistrement.";
            } 
        }

    } else {
       $_SESSION['failure'] = "Erreur lors d'inscription";
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
                <li><a href="#">Quitter le jeu</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <?php
            // if(isset($_SESSION['success'])){
            //     echo $_SESSION['success'];
            // }else{
            //     echo $_SESSION['failure'];
            // }
            ?>
            <div class="container">
                <h3>Remplissez le formulaire pour rejouer</h3>
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