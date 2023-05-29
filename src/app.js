const express = require('express');
const {engine} = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const pedidosRoutes = require('./routes/pedidos');

// Abro el server y seteo el puerto
const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Me conecto a la base
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'silverwood'
}, 'single'));




// Log de que esta escuchando el puerto
app.listen(app.get('port'), () => {
    console.log('Escuchando: ', app.get('port'));
});

app.use('/', pedidosRoutes);

app.get('/', (req, res) => {
    res.render('home');
});