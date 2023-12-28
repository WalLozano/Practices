const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use(require('./routes/index'))

app.listen(3000)
console.log('server on port 3000')