class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // добавление элемента в конец списка
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.tail.next = this.head;
    this.length++;
  }

  // удаление элемента по условию
  remove(condition) {
    if (!this.head) return;
    let previous = null;
    let current = this.head;
    for (let i = this.length; i > 0; i--)
    {
      if (eval("current.data._" + condition))
      {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
          continue;
        } else if (current === this.head) {
          this.head = current.next;
          this.tail.next = this.head;
          continue;
        } else if (current === this.tail) {
          this.tail = previous;
          this.tail.next = this.head;
          continue;
        } else {
          previous.next = current.next;
          current = previous
        }
        this.length--;
      }
      previous = current;
      current = current.next;
    }
  }

    // вывод списка
    output() {
      if (!this.head) return;
  
      let current = this.head;
  
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
}