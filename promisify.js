// Util es un modulo de utilidades
// Promisify es para hacer promesas mas simples
// sin todo el codigo que tiene la funcion getText

// const { promisify } = require("util");
const { readFile } = require("fs/promises");

// const readFilePromise = promisify(readFile);

async function read() {
  try {
    const resultado1 = await readFile("./data/uno.txt", "utf-8");
    const resultado2 = await readFile("./data/dos.txt", "utf-8");
    const resultado3 = await readFile("./data/tres.txt", "utf-8");
    const resultado4 = await readFile("./data/cuatro.txt", "utf-8");
    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
    console.log(resultado4);
  } catch(error){
    console.log(error);
  }
}

read()