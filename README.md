<h1 align="center">
  
 express-gestore-eventi
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

Il nostro obiettivo sarà quello di creare le api per un applicazione che gestirà degli eventi con le relative prenotazioni. Proseguiamo per milestone in modo da avere tutto sotto controllo.

### Milestone 1

Creiamo le seguenti rotte con relativo controller e router senza implementare le funzioni del controller.

- [GET] events/ (index)
- [POST] events/ (store)
- [PUT] events/:event (update)

### Milestone 2

Creiamo il model models/event.js e prevediamo le seguenti proprietà:

- id
- title
- description
- date
- maxSeats (numero massimo di posti)

Tramite dei metodi statici, facciamo in modo di poter leggere e salvare idati su un file json dedicato.
Un’istanza della classe rappresenterà un singolo evento.

### Milestone 3

Usiamo il model nelle funzioni scritte nei controller e facciamo in modo che tramite dei metodi statici del model possiamo recuperare uno (tramite id) o tutti gli eventi.
Prevediamo la possibilità di passare dei filtri tramite query string alla rotta index.

### Milestone 4

Gestiamo eventuali errori 404 e 500 tramite dei middleware dedicati.

## Bonus

- Creiamo le seguenti rotte per gestire le prenotazioni
  - [GET] events/:event/reservations (index)
  - [POST] events/:event/reservations (store)
  - [DELETE] events/:event/reservations/:reservation (destroy)
- Creiamo il model models/reservation.js e prevediamo le seguenti proprietà
  - id
  - firstName
  - lastName
  - email
  - eventId
- Nel model degli eventi, prevediamo una funzione per recuperare tutte le prenotazioni associate
- Creiamo dei setter per ogni proprietà dei nostri model ed implementiamo una validazione dei dati ricevuti. Nel caso, lanciamo un errore
- Creare degli errori personalizzati estendendo la classe Error.
- Non permettiamo di aggiungere o togliere una prenotazione per un evento già passato
- Non permettiamo di aggiungere una prenotazione ad evento senza più posti disponibili.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
