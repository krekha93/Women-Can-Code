class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList3 {
  constructor() {
    this.head = null;
  }

  // append(data) {
  //   const newnode = new Node(data);
  //   if (!this.head) {
  //     this.head = newnode;
  //   } else {
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }

  //     current.next = newnode;
  //   }
  // }

  // merge(l1, l2) {
  //   let h1 = l1.head;
  //   let h2 = l2.head;

  //   let current = this.head;
  //   while (h1 && h2) {
  //     if (h1.data < h2.data) {
  //       let newnode = new Node(h1.data);
  //       current.next = newnode;
  //       current = current.next;
  //       h1 = h1.next;
  //     } else {
  //       let newnode = new Node(h2.data);
  //       current.next = newnode;
  //       current = current.next;
  //       h2 = h2.next;
  //     }
  //   }

  //   if (h1) {
  //     current.next = h1;
  //   } else if (h2) {
  //     current.next = h2;
  //   }
  // }

  sum_of_two_number(l1, l2) {
    const newnode = new Node();
    let temp = newnode;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry) {
      let sum = 0;
      if (l1 !== null) {
        sum = l1.data;
        l1 = l1.next;
      }

      if (l2 !== null) {
        sum = sum + l2.data;
        l2 = l2.next;
      }

      sum = sum + carry;
      carry = Math.floor(sum / 10);
      const node = new Node(sum % 10);
      temp.next = node;
      temp = temp.next;
    }

    this.head = newnode.next;

    return this.head;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    arr = arr.join(" ");
    console.log(arr);
  }

  // print() {
  //   let arr = [];
  //   let firstnode = this.head;
  //   let current = firstnode.next;
  //   while (current) {
  //     arr.push(current.data);
  //     current = current.next;
  //   }

  //   arr = arr.join(" ");
  //   console.log(arr);
  // }
}

class LinkedList2 {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newnode = new Node(data);
    if (!this.head) {
      this.head = newnode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newnode;
    }
  }

  merge(l1, l2) {
    let h1 = l1.head;
    let h2 = l2.head;
    if (h1.data > h2.data) {
      [h1, h2] = [h2, h1];
    }
    let res = h1;
    let temp = null;

    while (h1 && h2) {
      temp = null;
      while (h1 && h1.data <= h2.data) {
        temp = h1; // storing last sorted node
        h1 = h1.next;
      }

      temp.next = h2;
      [h1, h2] = [h2, h1];
    }

    return res;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    arr = arr.join(" ");
    console.log(arr);
  }
}

class LinkedList1 {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newnode = new Node(data);
    if (!this.head) {
      this.head = newnode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newnode;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    arr = arr.join(" ");
    console.log(arr);
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  //   middle() {
  //     let current = this.head;
  //     let count = 0;
  //     while (current) {
  //       current = current.next;
  //       count++;
  //     }

  //     console.log(count);

  //     let mid = Math.floor(count / 2);
  //     console.log(mid);
  //     current = this.head;
  //     for (let i = 1; i <= mid; i++) {
  //       current = current.next;
  //     }

  //     console.log(current.data);
  //   }

  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.data);
  }

  nth_node(pos) {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count += 1;
      temp = temp.next;
    }

    if (pos === count) {
      this.head = this.head.next;
      return;
    }

    temp = this.head;
    let prev = null;
    let n = 0;
    while (n < count - pos) {
      n += 1;
      prev = temp;
      temp = temp.next;
    }

    prev.next = temp.next;
  }

  remove_nth_node(pos) {
    const newnode = new Node();
    newnode.next = this.head;

    let fast = newnode;
    let slow = newnode;

    for (let i = 0; i < pos; i++) {
      fast = fast.next;
      if (fast === null) {
        return this.head; // Invalid 'pos', return the original list.
      }
    }

    while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    if (slow === newnode) {
      this.head = this.head.next;
    } else {
      slow.next = slow.next.next;
    }

    return newnode.next;
  }

  delete_node(val) {
    let current = this.head;

    while (current.data !== val) {
      current = current.next;
    }

    current.data = current.next.data;
    current.next = current.next.next;
    return this.head;
  }
}

const linkedlist = new LinkedList1();
const linkedlist2 = new LinkedList2();
const linkedlist3 = new LinkedList3();
linkedlist.append(2);
linkedlist.append(4);
linkedlist.append(3);
linkedlist.append(5);
linkedlist.append(6);
linkedlist.print();
linkedlist.delete_node(3);

linkedlist.print();
// linkedlist.nth_node(5);
// linkedlist.remove_nth_node(5);
// linkedlist.print();

// linkedlist.reverse();
// linkedlist.print();
// linkedlist.middle();

linkedlist2.append(5);
linkedlist2.append(6);
linkedlist2.append(4);

// linkedlist2.print();
linkedlist3.sum_of_two_number(linkedlist.head, linkedlist2.head);
// linkedlist3.print();
// linkedlist3.append(0);
// linkedlist3.merge(linkedlist, linkedlist2);
// linkedlist3.print();
// linkedlist2.merge(linkedlist, linkedlist2);

// linkedlist2.print();
