const express = require('express');
const router = express.Router(); // Creamos una instancia del enrutador de Express

// Ruta principal (página de inicio)
router.get('/', (req, res) => {
    res.render('index', { 
        titulo: 'Inicio', // Título de la página
        mensaje: 'Bienvenido a Express con Rutas' // Mensaje que se mostrará en la vista
    });
});

// Ruta de contacto
router.get('/contacto', (req, res) => {
    res.render('index', { 
        titulo: 'Contacto', // Título de la página de contacto
        mensaje: 'Esta es la página de contacto' // Mensaje que se mostrará en la vista
    });
});

// Exportamos el router para poder utilizarlo en la aplicación principal
module.exports = router;
