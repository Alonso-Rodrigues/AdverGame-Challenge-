<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
                font-family: Arial, sans-serif;
                text-align: center;
            }

            #counter {
                font-size: 36px;
                margin: 20px;
            }

            #incrementButton {
                font-size: 24px;
                padding: 10px 20px;
            }
    </style>
    <title>Document</title>
</head>
<body>
       
         <h1>Compteur Automatique</h1>
           <div id="counter">3</div>


 <script>
    
            // Récupération de l'élément du compteur
            const counter = document.getElementById("counter");

            // Fonction pour mettre à jour le compteur automatiquement
            function updateCounter() {
                let count = parseInt(counter.innerText);

                // Si le compteur est supérieur à 1, décrémentez-le
                if (count > 1) {
                    count--;
                    counter.innerText = count;
                } else {
                    // Quand le compteur atteint 1, affiche "GO !"
                    counter.innerText = "GO !";
                }
            }

            // Mettre à jour le compteur automatiquement toutes les secondes
            setInterval(updateCounter, 1000);
 </script>
</body>
</html>