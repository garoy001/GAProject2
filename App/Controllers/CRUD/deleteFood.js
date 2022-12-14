// initializing and importing the various libraries needed
//
// Express
const express = require('express');
//
const foodInfo = require('../../../Database/Models/foods');
exports.deleteFood = async (foodID) => {
	try {
		await foodInfo.deleteOne({ foodId: foodID });
		console.log('food deleted succesfully');
	} catch (error) {
		console.log('food not deleted, error');
	}
};
