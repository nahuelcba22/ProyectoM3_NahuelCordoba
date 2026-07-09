#  Mímir AI Chat

Una Single Page Application (SPA) desarrollada con JavaScript Vanilla que permite conversar con **Mímir**, el guardián del Pozo de la Sabiduría de la mitología nórdica, utilizando la API de Google Gemini mediante **Vercel Serverless Functions** para proteger la API Key.

---

##  Características

*  Single Page Application (SPA)
*  Routing con History API
*  Responsive Design (Mobile-First)
*  Chat con inteligencia artificial
*  Historial de conversación durante la sesión
*  Persistencia del historial mediante Local Storage
*  Estado de carga mientras la IA responde
*  Manejo de errores de red
*  Scroll automático al último mensaje
*  Enter para enviar mensajes
*  Serverless Function en Vercel
*  API Key protegida
*  Tests unitarios con Vitest

---

##  El personaje

Mímir es una figura de la mitología nórdica conocida como el guardián del Pozo de la Sabiduría.

En esta aplicación responde como un antiguo consejero de Odín, utilizando un tono tranquilo, respetuoso y misterioso. Su personalidad se define mediante un *system prompt* diseñado específicamente para mantener la coherencia durante toda la conversación.

---

##  Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES Modules)
* Google Gemini API
* Vercel Serverless Functions
* Vitest
* Vercel

---

##  Estructura del proyecto

```text
api/
└── functions.js

tests/
└── utils.test.js

views/
├── about.js
├── chat.js
└── home.js

app.js
index.html
styles.css
utils.js
package.json
vercel.json
README.md
```

---

##  Instalación

Clonar el repositorio:

```bash
git clone TU_REPOSITORIO
```

Entrar al proyecto:

```bash
cd TU_PROYECTO
```

Instalar dependencias:

```bash
npm install
```

---

##  Variables de entorno

Crear un archivo `.env.local` con:

```env
GEMINI_API_KEY=TU_API_KEY
```

También se incluye un archivo `.env.example` como referencia.

---

##  Ejecutar en desarrollo

```bash
npx vercel dev
```

La aplicación estará disponible normalmente en:

```
http://localhost:3000
```

---

##  Ejecutar los tests

```bash
npm test
```

---

##  Deployment

El proyecto está preparado para desplegarse en Vercel.

Pasos:

1. Subir el repositorio a GitHub.
2. Importarlo desde Vercel.
3. Configurar la variable de entorno:

```
GEMINI_API_KEY
```

4. Realizar el Deploy.

---

##  Capturas de pantalla

##  Versión Mobile

#### Home

![Home Mobile](screenshots/home-mobile.png)

---

#### Chat

![Chat Mobile](screenshots/chat-mobile.png)

---

#### About

![About Mobile](screenshots/about-mobile.png)

###  Versión Desktop

#### Home

![Home Desktop](screenshots/home-desktop.png)

---

#### Chat

![Chat Desktop](screenshots/chat-desktop.png)

---

#### About

![About Desktop](screenshots/about-desktop.png)

---




##  Aplicación desplegada

**Vercel**

proyecto-m3-nahuel-cordoba.vercel.app

---

##  Repositorio

https://github.com/nahuelcba22/ProyectoM3_NahuelCordoba

---

##  Registro del uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo técnico para:

* Mejorar la estructura general del proyecto
* Diseñar y refinar el *system prompt* de Mímir
* Revisar el diseño responsive
* Resolver problemas relacionados con la integración de Gemini API
* Verificar la implementación de Vercel Serverless Functions
* Revisar el código y detectar posibles mejoras de organización y mantenimiento.
* Guía de progresion para mejor estructura y evitar errores innecesarios

Las sugerencias obtenidas fueron evaluadas antes de ser incorporadas al proyecto. La implementación final, las decisiones de diseño, la integración de funcionalidades y las pruebas fueron realizadas durante el desarrollo del proyecto.

---

##  Autor

Mariano Córdoba

