// Alternativa a los callback
// permite escribir mejor codigo asincrono

const { readFile } = require("fs");

/* new Promise(function (resolve, reject) {
  readFile("./data/cuatro.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
}); */

// Para hacerlo reutilizable

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// Cuando se llama a la funcion hay que usar
// then para decirle que hacer cuando sale bien
// y catch cuando sale mal

// Se puede usar cuantas veces quiera
// con un then para leer archivo y otro para mostrar resultado

getText("./data/cuatro.txt")
  .then((result) => console.log(result))
  .then(() => getText("./data/uno.txt"))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

