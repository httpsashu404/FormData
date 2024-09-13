const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
try {
    mongoose.connect('mongodb://localhost:27017/form')
    console.log('Database connected')
} catch (error) {
    console.log('connection failed')
}

// Define Schema and Model
const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Form = mongoose.model('Form', FormSchema);

// Routes
app.post('/api/form', async (req, res) => {
    try {
        const formData = new Form(req.body);
        await formData.save();
        res.status(400).json({ message: 'Error saving data', error });
    } catch (error) {
        res.status(201).json({ message: 'Data saved successfully' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on : ${PORT}`);
});
