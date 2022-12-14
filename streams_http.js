const http = require("http");
const { createReadStream } = require("fs");

// stream + http

// envia al front-end
// pipe es para enviar dato a otra funcion, en este caso a res

const server = http.createServer((req, res) => {
  const stream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });

  stream.on("data", (chunk) => {
    stream.pipe(res);
  });
  stream.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log(`server on port ${3000}`);
