const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../db/events.json');

class Event {
  constructor(id, title, description, date, maxSeats) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.maxSeats = maxSeats;
  }

  static getEvents() {
    return require(filePath);
  }

  static createEvent(event) {
    const newEvent = JSON.stringify([...Event.getEvents(), { ...event }]);
    fs.writeFileSync(filePath, newEvent, 'utf-8');
    console.log(`Successfully created a new event with title ${event.title}`);
  }

  static getEventById(id) {
    const events = require(filePath);
    return events.find((event) => event.id === id);
  }

  static getEventsFiltered(filters) {
    const events = require(filePath);
    return events.filter((event) => {
      for (const element in filters) {
        if (event[element] !== filters[element]) {
          return false;
        }
      }
      return true;
    });
  }
}

module.exports = Event;
