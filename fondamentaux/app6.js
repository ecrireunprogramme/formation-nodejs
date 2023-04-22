const EventEmitter = require('events');
const fs = require('fs');

const em = new EventEmitter();

const listener = (data) => {
  console.log('Notification', data);
};

em.addListener('notify', listener);
em.on('notify', () => console.log('hello'));

//em.removeListener('notify', listener);

const demarrerTravail = (n) => {
  for (let i = 0; i < n; i++) {
    if (i % 10000 === 0) {
      em.emit('notify', {'id': '94kdmnf', 'montant': i, status: 'completed'});
    }

    fs.appendFileSync('./data/charge.txt', `Iteration ${i}`);
  }
}

console.log('-> Début');

//demarrerTravail(100000);
console.log('total listeners =', em.listenerCount('notify'));

console.log('<- Fin');

