import { renderHome } from "./views/home.js";
import { renderChat, initChat } from "./views/chat.js";
import { renderAbout } from "./views/about.js";


const app = document.querySelector("#app");



function router() {

    const path = window.location.pathname;


    switch (path) {


        case "/chat":

            app.innerHTML = renderChat();

            initChat();

            break;



        case "/about":

            app.innerHTML = renderAbout();

            break;



        case "/":
        case "/home":
        default:

            app.innerHTML = renderHome();

            break;

    }

}



// Permite usar botones atrás/adelante del navegador

window.addEventListener(
    "popstate",
    router
);



// Navegación SPA sin recargar página

document.addEventListener(
    "click",
    (event) => {


        const link = event.target.closest("[data-link]");


        if(!link) return;


        event.preventDefault();



       history.pushState(
                          {},
            "",
            link.pathname
                        );


        router();


    }
);



// Carga inicial

router();