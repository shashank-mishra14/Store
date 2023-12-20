const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Store").then(() => {
    console.log('Connected to MongoDB');
});