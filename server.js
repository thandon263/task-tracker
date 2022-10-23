const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

const port = process.env.PORT || 4800;

server.listen(port, () => {
  console.log(`JSON Server is listening on: ${port}`);
});