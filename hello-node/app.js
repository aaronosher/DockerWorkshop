const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello! Go to /html or /txt to see the text or html file.'));

// THIS SENDS THE HTML FILE
app.get('/html', (req, res) => res.sendFile(__dirname + '/hello-world.html'));

// THIS SENDS THE TEXT FILE
app.get('/txt', (req, res) => res.sendFile(__dirname + '/hello-world.txt'));

app.listen(PORT, () => console.log('Example app listening on port %s!', PORT));