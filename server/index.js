const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const routes = require('../routes');

const PORT = 3000;

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', routes.index);
app.get('/javascript', routes.javascript);
app.get('/swift', routes.swift);
app.get('/css', routes.css);

// tech namespace
const tech = io.of('/tech');

tech.on('connection', (socket) => {
  socket.on('join', (data) => {
    socket.join(data.room);
    tech.in(data.room).emit('message', `New user joined ${data.room} room!`);
  });

  socket.on('message', (data) => {
    console.log('message: ', data.msg);
    tech.in(data.room).emit('message', data.msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');

    tech.emit('message', 'user disconnected');
  });
});
