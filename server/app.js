const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');

// inicio
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  // helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// variables globales
app.use((req, res, next) => {
  next();
});

// rutas
app.use('/api/peliculas', require('./routes'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// inicia el server
app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
