const express = require('express');
const router = express.Router();
const eventsControllers = require('../controllers/events.js');

router.get('/events', eventsControllers.index);
router.post('/events', eventsControllers.store);
router.put('/events/:event', eventsControllers.update);

module.exports = router;
