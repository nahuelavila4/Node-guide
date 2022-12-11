// Util es un modulo de utilidades
// Promisify es para hacer promesas mas simples
// sin todo el codigo que tiene la funcion getText

const { promisify } = require("util");
const { readFile } = require("fs");

const readFilePromise = promisify(readFile);

async function read() {
  try {
    const resultado1 = await readFilePromise("./data/uno.txt", "utf-8");
    const resultado2 = await readFilePromise("./data/dos.txt", "utf-8");
    const resultado3 = await readFilePromise("./data/tres.txt", "utf-8");
    const resultado4 = await readFilePromise("./data/cuatro.txt", "utf-8");
    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
    console.log(resultado4);
  } catch(error){
    console.log(error);
  }
}

read()