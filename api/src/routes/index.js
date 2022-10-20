const { Router } = require('express');
const { getAllDogs } = require('../Controllers/getAllDogs');
const { getDogsBreeds } = require('../Controllers/getDogsBreeds');
const { getTemperament } = require('../Controllers/getTemperament');
const { postDogs } = require('../Controllers/postDogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs',getAllDogs)
router.get('/dogs/:id',getDogsBreeds)
router.get('/temperaments',getTemperament)
router.post('/dogs',postDogs)


module.exports = router;
