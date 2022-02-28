import Stack from '../stack/stack';

const stack = new Stack<number>();
stack.push(1);
console.log(`stack size is ${stack.size()}`);
stack.push(10);
console.log(`stack size is ${stack.size()}`);
stack.push(7);
console.log(`stack size is ${stack.size()}`);
stack.push(4);
console.log(`stack size is ${stack.size()}`);
stack.push(5);

console.log(`Peeking into stack ${stack.peek()}`);
stack.pop();
console.log(`Peeking into stack after popping - ${stack.peek()}`);
console.log(`does stack contains item 4 - ${stack.contains(4)}`);
console.log(`does stack contains item 4 - ${stack.contains(200)}`);
