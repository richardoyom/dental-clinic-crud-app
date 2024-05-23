const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employee.route');
const path = require('path');


const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS for templating
app.set('view engine', 'ejs');


// Database connection
mongoose.connect("mongodb+srv://richardoyom:<password>@cluster0.4x10vkh.mongodb.net/dental-clinic?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{ 
    console.log("connected to database");
})
.catch(()=>{
    console.log("connection failed");

});


// Routes
app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});  


