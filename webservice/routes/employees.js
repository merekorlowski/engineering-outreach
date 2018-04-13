const express = require('express');
const employeeData = require('../dummyData/employee.json');
const empProjectData = require('../dummyData/employeeProject.json');
const empTeamData = require('../dummyData/employeeTeam.json');
const teamData = require('../dummyData/team.json');

const router = express.Router();

/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */

/**
 * Employee routes
 */
router.get('/api/employees', (req, res) => getAllEmployees(req, res));
router.get('/api/employees/project/:projectId', (req, res) =>
	getEmployeesByProductId(req, res)
);
router.get('/api/employees/team/:teamId', (req, res) =>
	getEmployeesByTeamId(req, res)
);
router.post('/api/employees/:employeeId/team', (req, res) =>
	createTeam(req, res)
);

/**
 * Returns all employees to the client
 */
function getAllEmployees(req, res) {
	res.json(employeeData);
}

/**
 * Returns employees by projectId, returns to client
 */
function getEmployeesByProductId(req, res) {
	const employees = [];
	const { projectId } = req.params;
	for (let i = 0; i < empProjectData.length; i++) {
		if (projectId == empProjectData[i].projectId) {
			const { employeeId } = empProjectData[i];
			for (let j = 0; j < employeeData.length; j++) {
				if (employeeId == employeeData[j].employeeId) {
					employees.push(employeeData[j]);
				}
			}
		}
	}
	res.json(employees);
}

/**
 * Returns all employee by teamId, return to client
 */
function getEmployeesByTeamId(req, res) {
	const employees = [];
	const { teamId } = req.params;
	for (let i = 0; i < empTeamData.length; i++) {
		if (teamId == empTeamData[i].teamId) {
			const { employeeId } = empTeamData[i];
			for (let j = 0; j < employeeData.length; j++) {
				if (employeeId == employeeData[j].employeeId) {
					employees.push(employeeData[j]);
				}
			}
		}
	}
	res.json(employees);
}

function createTeam(req, res) {
	const team = req.body;
	const prevLength = teamData.length;
	const teamId = prevLength + 1;
	let exists = false;

	team.teamId = `tm${teamId}`;

	for (let i = 0; i < teamData.length; i++) {
		if (teamData[i].teamId == teamId) {
			exists = true;
			break;
		}
	}

	if (!exists) {
		teamData.push({
			teamId,
			name: team.name,
			color: team.color,
			employeeId: team.employeeId
		});

		const { members } = team;
		for (let i = 0; i < members.length; i++) {
			empTeamData.push({
				teamId,
				employeeId: members[i].employeeId,
				isAdmin: members[i].isAdmin
			});
		}
	}

	const { length } = teamData;
	res.json({
		teamId,
		wasAdded: prevLength == length - 1
	});
}

module.exports = router;
