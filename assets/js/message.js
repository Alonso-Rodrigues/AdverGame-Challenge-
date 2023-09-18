document.addEventListener('DOMContentLoaded', function () {
    const rejouerLink = document.getElementById('rejouer-link');
    const message = document.getElementById('message');

    // Ajoutez un gestionnaire d'événements au lien "Rejouer" (le bouton)
    rejouerLink.addEventListener('click', function (e) {
        const nomInput = document.querySelector('input[name="nom"]');
        const prenomInput = document.querySelector('input[name="prenom"]');
        const emailInput = document.querySelector('input[name="email"]');
        const phoneInput = document.querySelector('input[name="phone"]');

        // Vérifiez si les champs du formulaire sont vides
        if (!nomInput.value || !prenomInput.value || !emailInput.value || !phoneInput.value) {
            e.preventDefault(); // Empêche la redirection vers "game.html"
            message.style.display = 'block'; // Affiche le message en changeant le style CSS
        }
    });
});