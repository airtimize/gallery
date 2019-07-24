/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/index');
const path = require('path');

const app = express();
const port = process.env.PORT || 3012;

const db = require('../database/index.js');

app.use('/rooms/:listingid', express.static(path.join(__dirname, '../public')));

app.get('/api/:listingid/images', cors(), controllers.getImages);

app.post('/api/:listingid/images',);

app.put('/api/:listingid/images',);

app.delete('/api/:listingid/images',);



app.listen(port, () => { console.log(`Listening on port ${port}`); });
