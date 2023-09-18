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
            // if ($row) {
            //     $prenomDernierUtilisateur = $row['prenom'];
            $_SESSION['prenomDernierUtilisateur'] = $row['prenom'];
            $_SESSION['auth'] = true;
            
            // }
        } else {
            $_SESSION['failure'] = "Erreur lors de l'inscription";
        }
    }
}


?>