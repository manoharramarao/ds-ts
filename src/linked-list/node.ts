class Node<T> {
    val: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default Node;