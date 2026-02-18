# Chat Widget React

Proyecto React con un modal tipo WhatsApp que se abre al hacer clic en un icono flotante. Incluye un chat con mensaje de bienvenida y respuestas por opciones (1, 2, 3, 4) con árbol de conversación.

## Cómo usar

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) y haz clic en el icono verde (esquina inferior derecha) para abrir el chat.

## Estructura

- **Icono flotante**: estilo WhatsApp (verde), abre el modal al hacer clic.
- **Modal**: cabecera verde, lista de mensajes y campo para escribir.
- **Chat**: mensaje de bienvenida al abrir; al escribir 1, 2, 3 o 4 el bot responde y muestra un nuevo menú de opciones según el árbol definido en `src/chatData.js`.

Puedes editar `src/chatData.js` para cambiar los mensajes y el árbol de opciones.
