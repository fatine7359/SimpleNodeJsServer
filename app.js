const express = require('express');
const stuffRoutes = require('./routes/stuff');

const app = express();
app.use(express.json());

app.use('/projects', stuffRoutes);



module.exports = app;