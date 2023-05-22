const fs = require ('fs');
const colors = require('colors');

const crearArchivo =  async ( base = 5, listar= false, maximo = 10  ) =>{

    try {
        
        let salida = '';
        let consola= '';
        
        for (let index = 1; index <= maximo; index++) {
            salida += `${ base } x ${index} = ${ base * index}\n`;
            consola += `${ base } ${'x'.green} ${index} ${'='.green} ${ base * index}\n`;
            
        }
        
        if (listar == true) {
            console.log("================".red);
            console.log("  Tabla del:".grey, colors.green (base));
            console.log("================".red);
            console.log(consola);
        }
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`.rainbow;
        
    } catch (error) {

        throw error;

    }


}

module.exports = {
    crearArchivo
}