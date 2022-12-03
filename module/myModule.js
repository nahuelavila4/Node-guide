const pagina ="aviladeveloper";
const tiempo= 142;
const abierto = true;
const propietario = "Nahuel Avila";


const info = {
    pagina: pagina,
    tiempo: tiempo,
    abierto: abierto,
    propietario: propietario  
}

// module.exports = info;
// console.log(module);

// Mas corto 
module.exports = {
    pagina,
    tiempo,
    abierto,
    propietario
}

/* 
Para exportar mas de una cosa se puede agrupar
en un objeto
 */