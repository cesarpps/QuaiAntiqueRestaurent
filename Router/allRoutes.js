    import Route from "./Route.js";

    //Définir ici vos routes
// ...existing code...
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/singin", "Connexion", "/pages/singin.html", ["disconnected"], "/js/auth/singin.js"),
    new Route("/singup", "Inscription", "/pages/singup.html", ["disconnected"], "/js/auth/singup.js"), // <-- chemin corrigé
    new Route("/account", "Mon compte", "/pages/account.html", ["client", "admin"], ),
    new Route("/editpassword", "Mon compte", "/pages/editpassword.html", ["client", "admin"], ),
    new Route("/allresa", "Mon compte", "/pages/reservation/allresa.html", ["client"], ),
    new Route("/reserver", "Mon compte", "/pages/reservation/reserver.html", ["clint"], ),
    // ...remaining routes...
];
// ...existing code...
    //Le titre s'affiche comme ceci : Route.titre - websitename
    export const websiteName = "Quai Antique";
