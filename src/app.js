const express = require('express');
const cors = require('cors')
const router = require('./routes/routes')
require('dotenv').config();
const db = require('./configuration/database/db')

const app = express();
const PORT = process.env.PORT || 8080
app.use(express.json());
app.use(cors())
app.use('/api', router)
app.listen(PORT, () => {
    console.log('Server up');
})

module.exports = app;