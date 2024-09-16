// const http = require("http");

// const requestListener = (request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;
//   // const method = request.method;
//   // atau
//   const { method, url } = request;
//   console.log(url);

//   if ((url = "/")) {
//     if (method === "GET") {
//       response.statusCode = 200;
//       response.end("<h1>Hai GET!</h1>");
//     } else {
//       response.statusCode = 400;
//       response.end(
//         `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
//       );
//     }
//   } else if (url == "/about") {
//   }

//   // if (method === "POST") {
//   //   let body = [];
//   //   // body = Buffer.concat(body).toString();
//   //   // const { name } = JSON.parse(body);
//   //   response.end(`<h1>Hai ${name}!</h1>`);
//   // }
// };

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = "localhost";
// server.listen(port, host, () => {
//   console.log(`Server sedang berjalan di ${host}:${port}`);
// });

const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const init = async () => {
  console.log("pie soh");
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);
  await server.start();
  console.log(`Server run pada ${server.info.uri}`);
};

init();
