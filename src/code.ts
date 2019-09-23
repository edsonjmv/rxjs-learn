import { Subject } from 'rxjs/Subject';

const subject = new Subject();

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 Completed')
)

subject.next('The first thing has been sent');

const observer2 = subject.subscribe(
  data => addItem('Observer 2: ' + data),
  err => addItem(err),
  () => addItem('Observer 2 Completed')
)

subject.next('The second thing has been sent');
subject.next('A third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');

function addItem(val: any) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
