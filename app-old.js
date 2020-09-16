const http = require('http');

// Crear el servidor
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Javier',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Escuchando en 8080');