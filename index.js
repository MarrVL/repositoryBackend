require('dotenv').config()
const http = require('http')

// --- MODIFICACIÓN NECESARIA AQUÍ ---
function requestController(req, res) {
    console.log('Bienvenido al curso con Mariel Valdez Lima')

    // 1. Establecer el encabezado de la respuesta para indicar que es HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 2. Definir el contenido HTML
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Aplicación</title>
        </head>
        <body>
            <h1>Mi nombre es Mariel Yaneth Valdez Lima</h1>
        </body>
        </html>
    `;

    // 3. Enviar el contenido HTML como respuesta
    res.end(htmlContent);
}
// --- FIN DE LA MODIFICACIÓN NECESARIA ---

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000 // Añadí un puerto por defecto por si acaso

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})