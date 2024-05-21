// models/employee.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: { type: String, required: true },
});

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    department: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
});

const Department = mongoose.model('Department', DepartmentSchema);
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
    Department,
    Employee,
};
