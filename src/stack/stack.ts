interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  contains(item: T): boolean;
  size(): number;
}

class Stack<T> implements Stack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Max capacity reached! Can't add more");
    }
    console.log(`Pushed ${item} into the stack`);
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  contains(item: T): boolean {
    for (let i = 0; i < this.size(); i++) {
      if (this.storage[i] === item) {
        return true;
      }
    }
    return false;
  }

  size(): number {
    return this.storage.length;
  }
}

export default Stack;
