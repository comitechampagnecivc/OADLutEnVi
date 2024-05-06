function calculateAgeValue(age) {
    if (age < 10 || age === 10) {
        return 0;
    } else if ((age > 10 && (age < 20 || age === 20))) {
        return 20;
    } else if ((age > 20 && (age < 30 || age === 30))) {
        return 40;
    } else if ((age > 30 && (age < 40 || age === 40))) {
        return 60;
    } else if ((age > 40 && (age < 50 || age === 50))) {
        return 80;
    } else if ((age > 50 && (age < 60 || age === 60))) {
        return 100;
    } else if (age >= 60) {
        return 100;
    } else {
        return 0; // Valeur par défaut si aucune condition n'est satisfaite
    }
}

function calculateIndice() {
    // Récupération des valeurs des critères d'exploitation
    var ratioreserve = parseFloat(document.getElementById("ratioreserve").value);
    var ratioengagement = parseFloat(document.getElementById("ratioengagement").value);
    var ratiostatut = parseFloat(document.getElementById("ratiostatut").value);
    var ratiosurface = parseFloat(document.getElementById("ratiosurface").value);
    var ratioage = parseFloat(document.getElementById("ratioage").value);
    var ratioenroulement = parseFloat(document.getElementById("ratioenroulement").value);
    var ratioproprietaire = parseFloat(document.getElementById("ratioproprietaire").value);

    var indiceparc = (
        ((ratioage+ratioenroulement+ratiosurface+ratioproprietaire) /
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );

    // Récupération des valeurs des critères d'indice exploitation
    var surfacetot = parseFloat(document.getElementById("surfacetot").value);
    var reserve = parseFloat(document.getElementById("reserve").value);
    var engagement = document.getElementById("engagement").checked ? 100 : 0;
    var statut = parseFloat(document.getElementById("statut").value);

    var indiceexp = (
        ((ratioengagement+ratioreserve+ratiostatut) /
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );

    var fractionreserve = (
        ((ratioreserve)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionengagement = (
        ((ratioengagement)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionstatut = (
        ((ratiostatut)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionsurface = (
        ((ratiosurface)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionage = (
        ((ratioage)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionenroul = (
        ((ratioenroulement)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );
    var fractionprop = (
        ((ratioproprietaire)/
        (ratioage+ratioenroulement+ratiosurface+ratioproprietaire+ratioengagement+ratioreserve+ratiostatut)) * 100
    );

    // Récupération des valeurs des critères d'indice parcelle
    var surface = parseFloat(document.getElementById("surface").value);
    var age = parseFloat(document.getElementById("age").value);
    var enroulement = parseFloat(document.getElementById("enroulement").value);
    var proprietaire = document.getElementById("proprietaire").checked ? 100 : 0;

    // Calcul de l'indice
    var indice = (
        (reserve * 0.01) * (ratioreserve / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (engagement) * (ratioengagement / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (statut) * (ratiostatut / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (100-((surface / surfacetot) * 100)) * (ratiosurface / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (calculateAgeValue(age)) * (ratioage / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (enroulement) * (ratioenroulement / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))+
        (proprietaire) * (ratioproprietaire / (ratioage+ratioengagement+ratioenroulement+ratioproprietaire+ratioreserve+ratiostatut+ratiosurface))
    );

    // Affichage du résultat
    document.getElementById("result").innerHTML = indice.toFixed(2) + "%";

    document.getElementById("resultexp").innerHTML = indiceexp.toFixed(2) + "%";
    document.getElementById("resultparc").innerHTML = indiceparc.toFixed(2) + "%";

    document.getElementById("fractionreserve").innerHTML = fractionreserve.toFixed(2) + "%";
    document.getElementById("fractionengagement").innerHTML = fractionengagement.toFixed(2) + "%";
    document.getElementById("fractionstatut").innerHTML = fractionstatut.toFixed(2) + "%";

    document.getElementById("fractionsurface").innerHTML = fractionsurface.toFixed(2) + "%";
    document.getElementById("fractionage").innerHTML = fractionage.toFixed(2) + "%";
    document.getElementById("fractionenroul").innerHTML = fractionenroul.toFixed(2) + "%";
    document.getElementById("fractionprop").innerHTML = fractionprop.toFixed(2) + "%";
}
