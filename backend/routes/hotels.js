const express = require('express');
const CreateHotel = require('../controllers/hotelController');
const UpdateHotel = require('../controllers/hotelController');
const DeleteHotel = require('../controllers/hotelController');
const GetHotel = require('../controllers/hotelController');
const GetHotels = require('../controllers/hotelController');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.post('/', CreateHotel);

router.put('/:id', UpdateHotel);

router.delete('/:id', DeleteHotel);

router.get('/:id', GetHotel);

router.get('/', GetHotels);

module.exports = router;