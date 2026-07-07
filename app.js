import { renderHome } from "./views/home.js";

const app = document.querySelector("#app");


function router() {

    const path = window.location.pathname;


    switch (path) {

        case "/chat":
            app.innerHTML = "<h1>Chat en construcción...</h1>";
            break;


        case "/about":
            app.innerHTML = "<h1>Acerca de...</h1>";
            break;


        case "/":
        case "/home":
        default:
            app.innerHTML = renderHome();
            break;

    }

}


// Atrás y adelante del navegador
window.addEventListener("popstate", router);


// Navegación SPA
document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-link]");

    if (!link) return;


    e.preventDefault();


    history.pushState(
        {},
        "",
        link.href
    );


    router();

});


router();