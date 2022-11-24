const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Auto Car Api Running ')
})

app.listen(port, () => {
    console.log(`Auto Car Running in ${port}`)
})