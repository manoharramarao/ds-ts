import Node from './node';

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number = 0;

  constructor({val}: {val?: T} = {}) {
    if (val) {
      const newNode: Node<T> = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  /**
   * Returns true if list is empty else false
   * @returns {boolean}
   */
  isEmpty(): boolean {
    if (!this.head) {
      return true;
    }
    return false;
  }

  /* length(): number{
        return !this.list ? 0 : this.list.length;
    } */

  /**
   * Adds item to the front of the list.
   * Returns true if successfully added else false
   * @param {T} val - Value to add to list
   * @returns {boolean}
   */
  addFront(val: T): boolean {
    const newNode: Node<T> = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      // added if here just to avoid linting errors
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    return true;
  }

  /**
   * Adds item to the end of the list. Return true if it is successful
   * @param {T} val - Value of the new node to be added
   * @returns {boolean}
   */
  addBack(val: T): boolean {
    const newNode: Node<T> = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length += 1;
    }
    return true;
  }

  /**
   * Adds item at specifice position in the list.
   * Returns true on inserting successfully
   * @param {T} val - value to be inserted
   * @param {number} position - position at which value is inserted
   * @returns {boolean}
   */
  addAt(val: T, position: number): boolean {
    const newNode: Node<T> = new Node(val);

    if (position === 0) {
      return this.addFront(val);
    } else if (position === this.length) {
      return this.addBack(val);
    } else if (position < 0 || !this.head || position > this.length) {
      return false;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < position; i++) {
        currentNode = currentNode.next!;
      }
      let nextNode: Node<T> = currentNode.next!;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      currentNode.next = newNode;
      newNode.prev = currentNode;
      this.length += 1;
    }
    return true;
  }

  /**
   * Removes head
   */
  deleteFront(): void {
    if (this.head) {
      this.head = this.head.next;
    } else {
      console.log('List is empty');
    }
  }

  /**
   * Prints the entire list
   */
  printList(): void {
    if (this.head) {
      let currentNode: Node<T> = this.head;
      while (currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next!;
      }
    } else {
      console.log('The list is empty');
    }
  }
}

export default LinkedList;
