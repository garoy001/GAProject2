//Libraries
//
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
//
//Files
const { createFood } = require('../Controllers/CRUD/createFood');
const { deleteFood } = require('../Controllers/CRUD/deleteFood');
const { getFood } = require('../Controllers/CRUD/getFood');
const { updateFood } = require('../Controllers/CRUD/updateFood');
//
const router = express.Router();
//Middleware
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(methodOverride('_method'));
//create
router.post('/', async (req, res, next) => {
	let food = req.body;
	await createFood(food);
	console.log(food);
	res.send('food created');
});
//read
router.get('/', (req, res, next) => {
	res.render('main.ejs');
});

//update

module.exports = router;
