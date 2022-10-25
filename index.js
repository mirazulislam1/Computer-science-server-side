const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// make api

app.get('/', (req, res) =>{
    res.send('computer science api');
});

app.listen(port, () => {
    console.log('computer science running on port', port);
})