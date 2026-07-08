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


            <button id="clear-chat">
                Borrar historial
            </button>

        </div>


    </section>

    `;

}





export function initChat(){


    const input =
    document.querySelector("#chat-input");


    const button =
    document.querySelector("#send-button");


    const clearButton =
    document.querySelector("#clear-chat");


    const messagesContainer =
    document.querySelector("#messages");



    messagesContainer.scrollTop =
    messagesContainer.scrollHeight;



    button.addEventListener(
        "click",
        sendMessage
    );



    input.addEventListener(
        "keydown",
        (event)=>{

            if(event.key === "Enter"){

                sendMessage();

            }

        }
    );



    clearButton.addEventListener(
        "click",
        clearHistory
    );





    function clearHistory(){


        localStorage.removeItem(
            "mimir-chat"
        );


        messages.length = 0;


        messages.push({

            role:"mimir",

            content:
            "Las aguas del pozo están nuevamente tranquilas, viajero."

        });



        messagesContainer.innerHTML = `

            <div class="message mimir">
                ${messages[0].content}
            </div>

        `;


    }







    async function sendMessage(){


        const text =
        input.value.trim();



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





        const loadingMessage =
        document.createElement("div");



        loadingMessage.className =
        "message mimir loading";



        loadingMessage.textContent =
        "Mímir está pensando...";



        messagesContainer.appendChild(
            loadingMessage
        );



        messagesContainer.scrollTop =
        messagesContainer.scrollHeight;





        let reply;



        try{


            reply =
            await askMimir();


        }
        catch(error){


            reply =
            "Los antiguos secretos del pozo están fuera de mi alcance en este momento.";


        }




        loadingMessage.remove();





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



    }



}








async function askMimir(){


    const response =
    await fetch("/api/functions", {


        method:"POST",


        headers:{

            "Content-Type":
            "application/json"

        },


        body:JSON.stringify({

            messages:
            messages.map(message=>({


                role:
                message.role === "user"
                ? "user"
                : "model",


                parts:[

                    {

                        text:
                        message.content

                    }

                ]


            }))


        })


    });



    if(!response.ok){


        throw new Error(
            "Error comunicándose con Mímir"
        );


    }



    const data =
    await response.json();



    return data.reply;



}