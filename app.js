const express = require('express');
const dbconnect = require('./config');
const routes = require('./routes');

const app = express();
app.use(express.json());

dbconnect();

app.use('/', routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Este servidor está corriendo en el puerto ${PORT}`);
});