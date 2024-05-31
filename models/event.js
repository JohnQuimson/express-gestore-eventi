const path = require('path');
const fs = require('fs');
const { rejects } = require('assert');

const filePath = path.join(__dirname, '../db/events.js');

class Event {
  constructor(id, title, description, date, maxSeats) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
  }

  // read data
  static getEvent() {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (error, data) => {
        if (error) {
          return reject(error);
        }
        const events = JSON.parse(data);
        resolve(events);
      });
    });
  }

  // save data
  static saveEvent(event) {
    return new Promise((resolve, reject) => {
      Event.getEvent()
        .then((events) => {
          events.push(event);
          fs.writeFile(filePath, JSON.stringify(events), (error) => {
            if (error) {
              return reject(error);
            }
            resolve();
          });
        })
        .catch((error) => reject(error));
    });
  }
}

module.exports = Event;
