const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/posts', (req, res) => {
    res.send({
        name: 'Allen',
        surame: 'Chou',
        age: 20,
        title: 'Software Engineer',
    });
});



app.listen(port, () => {
    console.log('Listening on port 3000');
});