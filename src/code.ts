import { AsyncSubject } from 'rxjs/AsyncSubject';

const subject = new AsyncSubject();

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  () => addItem('Observer 1 Completed')
)

var i = 1;
var int = setInterval(() => {
  subject.next(i++)
}, 100);

setTimeout(() => {
  const observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data),
    () => addItem('Observer 2 Completed')
  )
  subject.complete();
}, 500);

function addItem(val: any) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
