/* console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}
// TODO: more examples
 */
import LinkedList from './linked-list/linked-list';

console.log('Linked lists');
let linkedList: LinkedList<number> = new LinkedList();
for (let i = 1; i <= 10; i++) {
  linkedList.addBack(i);
}
linkedList.printList();
console.log('Remove item from list');
linkedList.deleteFront();
linkedList.printList();

function main() {
  console.log('Welcome!');
}

export default main;
