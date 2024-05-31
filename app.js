const express = require('express');
const app = express();

const eventsRouter = require('./routers/events.js');
const errorsFormatter = require('./middlewares/errorsFormatter.js');
const routesNotFound = require('./middlewares/routesNotFound.js');

// body parser
app.use(express.json());

// routers
app.use('/events', eventsRouter);

// errors middlewares
app.use(routesNotFound); // 404
app.use(errorsFormatter); // 500

// start server
app.listen(3000, () => {
  console.log('Server attivo sulla porta http://localhost:3000.');
});
