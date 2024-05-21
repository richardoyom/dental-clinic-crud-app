// controllers/employee.controller.js
const { Employee, Department } = require('../models/employee.model');

// Create initial data
const createInitialData = async () => {
    const departments = [
        { name: 'General Dentistry' },
        { name: 'Pediatric Dentistry' },
        { name: 'Restorative Dentistry' },
        { name: 'Surgery' },
        { name: 'Orthodontics' },
    ];
    const departmentDocs = await Department.insertMany(departments);

    const employees = [
        { name: 'Lisa', surname: 'Harris', department: departmentDocs[2]._id },
        { name: 'Alfred', surname: 'Christensen', department: departmentDocs[0]._id },
        { name: 'John', surname: 'Dudley', department: departmentDocs[0]._id },
        { name: 'Danny', surname: 'Perez', department: departmentDocs[2]._id },
        { name: 'Sarah', surname: 'Alvarez', department: departmentDocs[1]._id },
        { name: 'Constance', surname: 'Smith', department: departmentDocs[3]._id },
        { name: 'Travis', surname: 'Combs', department: departmentDocs[4]._id },
        { name: 'Francisco', surname: 'Willard', department: departmentDocs[1]._id },
        { name: 'Janet', surname: 'Doe', department: departmentDocs[0]._id },
        { name: 'Leslie', surname: 'Roche', department: departmentDocs[4]._id },
    ];
    await Employee.insertMany(employees);
};

// Create
exports.createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('department');
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('department');
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create initial data on server start
createInitialData().catch(err => console.error('Failed to create initial data:', err));
