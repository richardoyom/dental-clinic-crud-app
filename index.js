const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee.route');


const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});  


mongoose.connect("mongodb+srv://richardoyom:<PASSWORD>@cluster0.4x10vkh.mongodb.net/dental-clinic?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{ 
    console.log("connected to database");
})
.catch(()=>{
    console.log("connection failed");

});
