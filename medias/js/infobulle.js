// Sélectionnez tous les éléments avec la classe .infobulle-logo
const infobulleLogos = document.querySelectorAll('.infobulle-logo');

// Parcourez chaque infobulle-logo et ajoutez un gestionnaire d'événements de clic
infobulleLogos.forEach((infobulleLogo) => {
    // Ajoutez un écouteur d'événements de clic à chaque infobulle-logo
    infobulleLogo.addEventListener('click', (event) => {
        // Sélectionnez l'élément .infobulle-text à côté de l'infobulle-logo cliqué
        const infobulleText = event.target.nextElementSibling;

        // Vérifiez si l'infobulle-text a déjà la classe .active
        const isActive = infobulleText.classList.contains('active');

        // Si l'infobulle-text est actuellement active, supprimez la classe .active
        if (isActive) {
            infobulleText.classList.remove('active');
        } else {
            // Sinon, ajoutez la classe .active
            infobulleText.classList.add('active');
        }
    });
});
