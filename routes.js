const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      const { name, location } = request.query;
      console.log("query:", name, location);
      return "homepage";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "about page";
    },
  },
  //   {
  //     method: "*",
  //     path: "/{any*}",
  //     handler: (request, h) => {
  //       return "halaman tidak ditemukan";
  //     },
  //   },
  {
    method: "GET",
    path: "/user/{username}",
    handler: (request, h) => {
      console.log("params", request.params);
      const { username } = request.params;
      return `username ${username}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      console.log("params", request.params);
      //   const { username } = request.params;
      return `username username`;
    },
  },
];

module.exports = routes;
