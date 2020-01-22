const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('message', { levi: 'hey how are you?' });
  socket.on('another event', (data) => {
    console.log('data: ', data);
  });
});
