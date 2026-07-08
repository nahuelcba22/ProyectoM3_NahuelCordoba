let messages = [
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



    button.addEventListener("click", sendMessage);


    input.addEventListener("keydown", (event)=>{

        if(event.key === "Enter"){

            sendMessage();

        }

    });



    function sendMessage(){


        const text = input.value.trim();


        if(!text) return;



        messages.push({

            role:"user",

            content:text

        });



        messagesContainer.innerHTML += `

            <div class="message user">
                ${text}
            </div>

        `;



        input.value="";



        setTimeout(()=>{


            const reply =
            "Interesante pregunta, viajero. El conocimiento del pozo aún guarda muchos misterios.";


            messages.push({

                role:"mimir",

                content:reply

            });



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