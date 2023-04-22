const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const pharmacyController = require('../controllers/pharmacyController');
const shiftController = require('../controllers/shiftController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Farmacias de Turno!');
});*/

// CRUD Users
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// CRUD pharmacies
router.get('/pharmacies', pharmacyController.getAll);
router.get('/pharmacies/:id', pharmacyController.getById);
router.post('/pharmacies', pharmacyController.create);
router.put('/pharmacies/:id', pharmacyController.update);
router.delete('/pharmacies/:id', pharmacyController.delete);

// CRUD Shifts
router.get('/shifts', shiftController.getShifts);
router.get('/shifts/:id', shiftController.getShiftById);
router.post('/shifts', shiftController.createShift);
router.put('/shifts/:id', shiftController.updateShift);
router.delete('/shifts/:id', shiftController.deleteShift);



module.exports = router;
