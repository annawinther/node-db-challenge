const server = require('./server.js');

// const PORT = process.env.PORT || 3000;

server.listen(3000, () => {
  console.log('Listening on port', 3000);
});