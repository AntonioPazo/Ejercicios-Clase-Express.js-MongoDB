const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon'); // Importamos el modelo de Pokémon

// Ruta para listar todos los Pokémon
router.get('/', async (req, res) => {
    const pokemones = await Pokemon.find(); // Obtiene todos los Pokémon de la base de datos
    res.render('pokemon', { pokemones }); // Renderiza la vista 'pokemon' con los datos obtenidos
});

// Ruta para mostrar el formulario de creación de un nuevo Pokémon
router.get('/nuevo', (req, res) => {
    res.render('crear'); // Renderiza la vista 'crear'
});

// Ruta para crear un nuevo Pokémon
router.post('/', async (req, res) => {
    const nuevoPokemon = new Pokemon(req.body); // Crea una nueva instancia de Pokémon con los datos del formulario
    await nuevoPokemon.save(); // Guarda el nuevo Pokémon en la base de datos
    res.redirect('/pokemon'); // Redirige a la lista de Pokémon después de guardar
});

// Ruta para mostrar el formulario de edición de un Pokémon existente
router.get('/editar/:id', async (req, res) => {
    const pokemon = await Pokemon.findOne({ id: req.params.id }); // Busca el Pokémon por su ID
    res.render('editar', { pokemon }); // Renderiza la vista 'editar' con los datos del Pokémon encontrado
});

// Ruta para actualizar los datos de un Pokémon
router.put('/editar/:id', async (req, res) => {
    await Pokemon.findOneAndUpdate({ id: req.params.id }, req.body); // Actualiza el Pokémon con los nuevos datos
    res.redirect('/pokemon'); // Redirige a la lista de Pokémon después de la actualización
});

// Ruta para eliminar un Pokémon
router.delete('/eliminar/:id', async (req, res) => {
    await Pokemon.findOneAndDelete({ id: req.params.id }); // Busca y elimina el Pokémon por su ID
    res.redirect('/pokemon'); // Redirige a la lista de Pokémon después de eliminar
});

module.exports = router; // Exporta el router para ser usado en la aplicación principal
