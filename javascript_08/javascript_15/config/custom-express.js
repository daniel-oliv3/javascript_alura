const express = require('express')
, app = express()
, cors = require('cors');

app.use(cors());

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log('Server error. Cause:');
    console.log(err.stack);
    res.status(500).json({ message: 'internal server error' });
});

require('../routes/nota')(app);

app.use('*', (req, res) => {
    const message = `${req.originalUrl} not found`;
    console.log(message);
    res.statusMessage = message;
    res.status(404).end();
});

module.exports = app;