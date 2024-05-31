const express = require('express');
const app = express();

const eventsRouter = require('./routers/events.js');

// body parser
app.use(express.json());

// routers
// app.get('/', eventsRouter);
app.get('/events', eventsRouter);

//start server
app.listen(3000, () => {
  console.log('Server attivo sulla porta http://localhost:3000.');
});
