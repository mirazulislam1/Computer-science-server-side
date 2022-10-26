const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')

// make api

app.get('/', (req, res) =>{
    res.send('computer science api');
});




app.get('/courses', (req, res) =>{
    res.send(categories)
})

app.listen(port, () => {
    console.log('computer science running on port', port);
})