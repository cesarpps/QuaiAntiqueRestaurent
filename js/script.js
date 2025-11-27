const tokenCookieName = "auth_token";
const simgoutBtn = document.getElementById("singout-btn");
const RoleCookieName = "role";
simgoutBtn.addEventListener('click', function() {
    eraseCookie(tokenCookieName);
    window.location.reload() ;
});
function getRole() {
    return getCookie(RoleCookieName);
}

function singout() {
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload() ;
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7); // le token expire dans 7 jours
}

function getToken() {
    return getCookie(tokenCookieName);
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected() {
    if(getToken() == null || getToken() == undefined) {
        return false;
    }
    else{
        return true;
       
    }
}


/*
disconnect
connected
 -admin
 - client



*/
function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allEllementsToEdit = document.querySelectorAll("[data-show]");

    allEllementsToEdit.forEach(element => {
        switch (element.dataset.show) {
            case "disconnected":
                if (userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case "connected":
                if (!userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case "admin":
                if (!userConnected || role !== "admin") {
                    element.classList.add("d-none");
                }
                break;
            case "client":
                if (!userConnected || role !== "client") {
                    element.classList.add("d-none");
                }
                break;
        }
    });
}
