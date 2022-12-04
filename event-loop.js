console.log("Hola");

// Aunque el tiempo de espera es 0 al ser una funcion
// que se ejecuta despues de un tiempo Node la deja para el final

setTimeout(() => {
  console.log("Como");
}, 0);
console.log("Estas?");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Bienvenido al servidor");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About");
    res.end();
  }
  res.end("No encontrado");
});

server.listen(3000);

// Para no hacer codigo que bloquea hilo de Node (blocking code)
// hay que usar funciones asincronas que se ejecutan en segundo plano
