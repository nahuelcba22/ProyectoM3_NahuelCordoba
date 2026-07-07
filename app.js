import { renderChat } from "./chat.js";


const app = document.querySelector("#app");


function router(){

    const path = window.location.pathname;


    if(path === "/chat"){

        renderChat();

    }else if(path === "/about"){

        renderAbout();

    }else{

        renderHome();

    }

}


function navigate(path){

    history.pushState(
        {},
        "",
        path
    );

    router();

}


window.addEventListener(
    "popstate",
    router
);


router();