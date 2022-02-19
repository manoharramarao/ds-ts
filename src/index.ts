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
console.log('Remove first item of the list');
linkedList.deleteFront();
linkedList.printList();
console.log('Remove last item of the list');
linkedList.deleteBack();
linkedList.printList();
console.log('Remove 7 from list');
linkedList.delete(7);
linkedList.printList();
console.log('Remove 9 from list by passing value');
linkedList.delete(9);
linkedList.printList();
console.log("Delete item that doesn't exist");
linkedList.delete(9);

linkedList = new LinkedList();
for (let i = 1; i <= 10; i++) {
  linkedList.addBack(i);
}
console.log('New list prepared');
linkedList.printList();
linkedList.deleteAt(0);
linkedList.deleteAt(100);
linkedList.deleteAt(1);
linkedList.deleteAt(8);
linkedList.deleteAt(5);
linkedList.printList();

function main() {
  console.log('Welcome!');
}

export default main;
