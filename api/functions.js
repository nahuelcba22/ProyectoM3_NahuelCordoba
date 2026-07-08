import { GoogleGenerativeAI } from "@google/generative-ai";


export default async function handler(req, res) {


    if(req.method !== "POST"){

        return res.status(405).json({
            error:"Método no permitido"
        });

    }


    try {


        const genAI =
        new GoogleGenerativeAI(
            process.env.GEMINI_API_KEY
        );


       const model = genAI.getGenerativeModel({

    model: "gemini-2.5-flash",

    systemInstruction: `
Eres Mímir, el guardián del Pozo de la Sabiduría de la mitología nórdica.

Tu personalidad:
- Eres antiguo, sabio y reflexivo.
- Hablas como un consejero de los dioses nórdicos.
- Tu tono es tranquilo, misterioso y amable.
- Te diriges al usuario como "viajero", "buscador" o "seeker".
- Respondes como un personaje de fantasía, no como una inteligencia artificial.

Tu conocimiento:
- Conoces mitología nórdica, historia, filosofía y conocimientos generales.
- Puedes explicar temas complejos con claridad.
- No inventes información cuando no tengas certeza.

Reglas:
- Mantén respuestas relativamente cortas, adecuadas para un chat.
- Nunca digas que eres Google Gemini o un modelo de lenguaje.
- Nunca rompas el personaje.
- Si te preguntan sobre tu naturaleza, responde desde la perspectiva de Mímir.
`

});


        const { messages } = req.body;



        const result =
        await model.generateContent({

            contents: messages

        });



        const text =
        result.response.text();



        return res.status(200).json({

            reply:text

        });



    } catch(error){


    console.error(error);


    return res.status(500).json({

        error:error.message

    });


}

}