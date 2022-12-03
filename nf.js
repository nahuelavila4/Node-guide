const fs = require("fs");

/* 
Es un modulo que tiene metodos para
crear archivos, leerlos, eliminarlos, etc
 */

/* 
const first = fs.readFileSync("./data/uno.txt", "utf-8");
console.log(first)

fs.writeFileSync("./data/tres.txt", "este es el tercer arcchivo");


const titulo = "este es un nuevo elemento"
fs.writeFileSync("./data/cuatro.txt", titulo, {
    flag: "a"
})
 */

// Ahora el mismo codigo de forma asincrona
// los metodos asincrtonos se pueden ejecutar al mismo
// tiempo que otro

fs.readFile("./data/uno.txt", function (error, data) {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
