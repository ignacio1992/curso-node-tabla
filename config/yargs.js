const argv = require('yargs')
    .option('b', {
       alias: 'base',
       type: 'number',
       demandOption:true,
       desc: 'Es la base de la tabla de multiplicar'
    })
    .option('m',{
        alias:'maximo',
        type:'number',
        default:10,
        desc:'Limite en la tabla de multiplicar'
    })               
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        desc:'Muestra la tabala de multiplicar'
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true
    })
    .argv;

module.exports = argv;