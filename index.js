const express = require('express');  //Mando llamar al modulo express y lo alojo en una variable con el mismo nombre
const morgan = require('morgan');   //Mando llamar al modulo morga y lo alojo en una variable con el mismo nombre
const path = require('path');   //Mando llamar al modulo path y lo alojo en una variable con el mismo nombre
const app = express();  // Creamos el node o servidor

// settings
app.set('port', process.env.PORT || 3000);  // Indicamos el puerto en dónde estaremos trabajando
// Para que Express pueda representar archivos de plantilla, deben establecerse los siguientes valores de aplicación:
app.set('views', path.join(__dirname, 'views'));    // Con 'views' indicamos el nombre del directorio donde se encuentran los archivos de plantilla
app.set('view engine', 'ejs');  // Con 'view engine' indicamos el nombre del motor de de plantilla que se utilizará

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes'));   // Indicamos en dónde se encuentran las rutas para representar a los archivos .ejs

// static files
// Obtenemos el directorio utilizando el objeto global __dirname que proporciona Node.js, y el directorio “public”
// pasarle esta función al objeto app a través del método “use”, con esto le indicamos que utilice la configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});