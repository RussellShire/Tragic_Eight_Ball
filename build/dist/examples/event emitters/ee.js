const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    this.data = '';
  }
  ponder(response) {
    this.data = response;
    this.emit('data-change', this.data);
  }
}

const myEmitter = new MyEmitter();

myEmitter.on('data-change', (data) => {
  console.log(data);
});

myEmitter.ponder('how does this work?');
