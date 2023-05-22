const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
require('colors');


console.clear();

crearArchivo ( argv.b, argv.l, argv.m )
    .then( nombreAchivo => console.log(nombreAchivo, 'creado'.rainbow) )
    .catch(err => console.log(err) );
