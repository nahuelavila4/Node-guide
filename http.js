const http = require("http");

// listen dice en que puerto va a estar funcionando el server
// request es lo que pide el cliente
// response lo que devuelve el servidor

http
  .createServer(function (request, response) {
    console.log(request.url);

    if (request.url === "/") {
      response.write("Welcome to the server");
      return response.end();
    }

    if (request.url === "/about") {
      response.write("acerca de");
      return response.end();
    }

    response.write(`<h1>Not found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">volver a la pagina principal</a>`);
    response.end();
  })
  .listen(3000);

console.log("Server creado en puerto 3000");
