const express = require('express');
const hbs = require('hbs');
const app = express();
// Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;


// midleware: instruccion o callback que se va a ejecutar siempre sin importar el url 
// al que se le haga peticion.
// Se mostrara lo que esta en la carpeta 'public', (index.html)
// Para acceder a 'home.html' hay que especificarlo en la barra de url asi: http://localhost:3000/home.html
app.use(express.static(__dirname + '/public')); // Todo lo que esta en ese directorio es publico.

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    // Express detecta que 'salida' es un objeto JSON y asi lo mostrara.
    // render() renderiza un archivo .hbs y lo muestra.
    res.render('home', {
        nombre: 'Javier'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en ${port}`);
});