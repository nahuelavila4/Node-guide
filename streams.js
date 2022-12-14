const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "Hola mundo".repeat(100000));
};

createBigFile();

// createReadStream devuelve un objeto grande en partes pequeñas
// esta funcion espera porcion de datos llamados chunk


/* const { createReadStream } = require("fs");
const stream = createReadStream("./data/bigfile.txt", "utf-8");


stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
    console.log("Termine de leer el archivo");
}) */