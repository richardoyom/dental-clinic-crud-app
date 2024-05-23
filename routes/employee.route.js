// routes/employee.route.js
const express = require('express');
const router = express.Router();
const {createEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee}  = require('../controllers/employee.controller');

router.post('/', createEmployee);
router.get('/', getEmployees);
router.get('/:id',getEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
