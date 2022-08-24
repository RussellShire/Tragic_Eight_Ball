// Basic Event Observer Pattern Example

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }
  publish() {
    this.observers.forEach((observer) => {
      observer();
    });
  }
}

function main() {
  const subject = new Subject();

  subject.subscribe(() => console.log('observer 1 runs'));
  subject.subscribe(() => console.log('observer 2 runs'));
  subject.subscribe(() => console.log('observer 3 runs'));

  subject.publish();
}

main();
