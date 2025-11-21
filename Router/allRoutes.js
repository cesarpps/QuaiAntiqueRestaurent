import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/singin", "Connexion", "/pages/singin.html", [], "/js/galerie.js"),
    new Route("/singup", "Inscription", "/pages/singup.html", [], "/js/galerie.js"),
    new Route("/account", "Mon compte", "/pages/account.html", [], "/js/galerie.js"),
    new Route("/editpassword", "Mot de passe", "/pages/editpassword.html", [], "/js/galerie.js"),

];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
