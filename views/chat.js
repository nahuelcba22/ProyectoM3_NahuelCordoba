let messages = JSON.parse(
    localStorage.getItem("mimir-chat")
) || [

    {
        role: "mimir",
        content:
            "Bienvenido viajero. Soy Mímir, guardián del Pozo de la Sabiduría."
    }

];



export function renderChat(){

    return `

    <section class="chat-container">


        <div class="messages" id="messages">

            ${messages.map(message => `

                <div class="message ${message.role}">
                    ${message.content}
                </div>

            `).join("")}

        </div>



        <div class="chat-input">

            <input
                id="chat-input"
                type="text"
                placeholder="Escribe tu pregunta..."
            >

            <button id="send-button">
                Enviar
            </button>

        </div>


    </section>

    `;

}




export function initChat(){


    const input = document.querySelector("#chat-input");

    const button = document.querySelector("#send-button");

    const messagesContainer = document.querySelector("#messages");


    // Mantener scroll abajo al entrar al chat

    messagesContainer.scrollTop =
    messagesContainer.scrollHeight;



    button.addEventListener("click", sendMessage);



    input.addEventListener("keydown",(event)=>{

        if(event.key === "Enter"){

            sendMessage();

        }

    });





    async function sendMessage(){


        const text = input.value.trim();


        if(!text) return;



        messages.push({

            role:"user",

            content:text

        });



        localStorage.setItem(
            "mimir-chat",
            JSON.stringify(messages)
        );



        messagesContainer.innerHTML += `

            <div class="message user">
                ${text}
            </div>

        `;



        input.value="";



        messagesContainer.scrollTop =
        messagesContainer.scrollHeight;




        // Mensaje de carga

        const loadingMessage = document.createElement("div");

        loadingMessage.className =
        "message mimir loading";

        loadingMessage.textContent =
        "Mímir está pensando...";


        messagesContainer.appendChild(
            loadingMessage
        );



        messagesContainer.scrollTop =
        messagesContainer.scrollHeight;




        // Simulación temporal de IA

        setTimeout(async ()=>{


            loadingMessage.remove();


let reply;

try{

    reply = await askMimir(text);

}
catch(error){

    reply =
    "Los antiguos secretos del pozo están fuera de mi alcance en este momento.";

}


            messages.push({

                role:"mimir",

                content:reply

            });



            localStorage.setItem(
                "mimir-chat",
                JSON.stringify(messages)
            );



            messagesContainer.innerHTML += `

                <div class="message mimir">
                    ${reply}
                </div>

            `;



            messagesContainer.scrollTop =
            messagesContainer.scrollHeight;



        },800);



    }



}




async function askMimir(question){


    const response = await fetch("/api/functions", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify({
    messages: messages.map(message => ({
        role: message.role === "user" ? "user" : "model",
        parts:[
            {
                text: message.content
            }
        ]
    }))
})

    });



    if(!response.ok){

        throw new Error("Error comunicándose con Mímir");

    }



    const data = await response.json();


    return data.reply;


}