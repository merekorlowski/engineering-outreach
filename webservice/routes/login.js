const express = require('express');
const router = express.Router();

const employeeData = require('../dummyData/employee.json');

/**
 * Verifies the login credentials provided by the user and sends a response to the user
 */
router.post('/api/login', (req, res) => login(req, res));

function login(req, res) {
	
	let employee = null;

	for (let i = 0; i < employeeData.length; i++) {
		if (employeeData[i].email === req.body.email && 
			employeeData[i].password === req.body.password) {
			
			employee = employeeData[i];
			break;
		}
	}

	if (employee) {
		res.json(employee);
	} else {
		res.status(401).send({
			error: 'Unauthorized'
		});
	}
}

module.exports = router;