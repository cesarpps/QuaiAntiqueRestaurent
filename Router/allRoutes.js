
import Route from "./Route.js";

//Définir vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../pages/home.html"),
    new Route("/galerie", "la galerie", "../pages/galerie.html"),
    new Route("/signin", "connexion", "../pages/auth/signin.html", "../js/auth/signin.js"),
    new Route("/signup", "Inscription", "../pages/auth/signup.html", "../js/auth/signup.js"),
    new Route("/account", "Mon compte", "../pages/auth/account.html"),
    new Route("/editPassword", "changement de mot de passe", "../pages/auth/editPassword.html"),
     new Route("/allResa", "Vos réservations", "../pages/reservations/allResa.html"),
     new Route("/reserver", "Réserver", "../pages/reservations/reserver.html"),
];


//le titre s'affiche comme ceci : Route.titre - websitename
export const websitename = "Quai Antique";
