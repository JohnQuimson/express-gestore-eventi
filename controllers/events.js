const path = require('path');
const fs = require('fs');

const index = (req, res) => {
  res.send('events index');
};

const store = (req, res) => {
  res.send('events store');
};

const update = (req, res) => {
  res.send('events update');
};

module.exports = {
  index,
  store,
  update,
};
