const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("InputPassword1");
const btnSingin = document.getElementById("btnSingin");

btnSingin.addEventListener('click', checkCredentials);

function checkCredentials() {
    // apller une API pour vérifier les informations d'identification en bdd
    if(mailInput.value.trim() === "test@gmail.com" && passwordInput.value.trim() === "123") {
        mailInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-invalid");
        // placer le token en cookie
        const token = "fakadddsa233o312o23mmdlmadmkmf"; // un token fictif
        setToken(token);
        showAndHideElementsForRoles(); // Met à jour l'affichage des éléments en fonction du rôle
        setCookie("role", "admin", 7); // un role fictif
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        alert("Email ou mot de passe incorrect.");
    }
}