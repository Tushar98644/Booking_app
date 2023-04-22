const express = require('express');
const CreateHotel = require('../controllers/hotelcontroller');
const UpdateHotel = require('../controllers/hotelcontroller');
const DeleteHotel = require('../controllers/hotelcontroller');
const GetHotel = require('../controllers/hotelcontroller');
const GetHotels = require('../controllers/hotelcontroller');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.post('/', CreateHotel);

router.put('/:id', UpdateHotel);

router.delete('/:id', DeleteHotel);

router.get('/:id', GetHotel);

router.get('/', GetHotels);

module.exports = router;