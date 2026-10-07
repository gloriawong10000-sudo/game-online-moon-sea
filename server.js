const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
  debug: false,
  allow_discovery: true,
  alive_timeout: 60000,
});
app.use('/peerjs', peerServer);
app.use(express.static(__dirname));

server.listen(PORT, () => {
  console.log('服务器已启动，端口 ' + PORT);
});