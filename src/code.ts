import { Observable } from 'rxjs/Observable';

const observable = Observable.create((observer: any) => {
  try {
    observer.next('Learn RxJS!');
    observer.next('Streams, Observables & Subscriptions');
    setInterval(() => {
      observer.next('Interval');
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed'),
);

const observer2 = observable.subscribe(
  (x: any) => addItem(x)
);

observer.add(observer2);

setTimeout(() => {
  observer.unsubscribe();
}, 6001);

function addItem(val: any) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
