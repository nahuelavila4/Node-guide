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
// then para decirle que hacer cuando sale bien
// y catch cuando sale mal

// Se puede usar cuantas veces quiera
// con un then para leer archivo y otro para mostrar resultado

getText("./data/cuatro.txt")
  .then((result) => console.log(result))
  .then(() => getText("./data/uno.txt"))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// async es para indicar que una funcion esta
// manejando codigo asincrono

// await indica que el codigo va a tomar tiempo

// ---------------------------------------------------------------------
// getText pero con async/await (forma mas facil)
// throw sirve para declarar error. Acaba con la ejecucion del programa.

async function read() {
  try {
    throw Error("Este es un error que no se esperaba");
    const resultado1 = await getText("./data/uno.txt");
    const resultado2 = await getText("./data/dos.txt");
    const resultado3 = await getText("./data/dos.txt");
    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
  } catch (error) {
    console.log(error);
  }
}
