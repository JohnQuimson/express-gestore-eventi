const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.js');
const reservationsControllers = require('../controllers/reservations.js');

router.get('/', eventsController.index);
router.get('/:id', eventsController.show);
router.post('/', eventsController.store);
router.put('/:event', eventsController.update);

// reservation
router.get('/:event/reservations', reservationsControllers.index);
router.post('/:event/reservations', reservationsControllers.store);
router.delete(
  '/:event/reservations/:reservation',
  reservationsControllers.destroy
);

module.exports = router;
