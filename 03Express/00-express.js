let express = require('express'), 
    app = express() 

app 
    .get('/', (req, res) => { 
        res.end('<h1>Hola Mundo desde Express</h1>') 
    })

    .get('/contact', (req, res) => { 
        res.send("Contacto") 
    })

    .listen(3000) 

console.log('Iniciando Express en el puerto 3000')