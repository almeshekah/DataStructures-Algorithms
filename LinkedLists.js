const prompt = require("prompt-sync")({ sigint: true });

class Node {
    constructor(age, highlight, next = null) {
      this.age = age;
      this.highlight = highlight;
      this.next = next;
    }
}
  
class LinkedList {
    constructor(age, highlight) {
      this.head = new Node(age, highlight);
}
  
insertBeginning = (age, highlight) => {
    const newNode = new Node(age, highlight, this.head);
    this.head = newNode;
};
  
traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`Age: ${current.age}, highlight: ${current.highlight}`);
      current = current.next;
    }
};
  
remove = (data) => {
      let current = this.head;
      if (current.data === data) {
        // Deleting node at the beginning
        this.head = current.next;
      } else {
        // Deleting node NOT in the beginning
        while (current) {
          let nextNode = current.next;
          if (nextNode.data === data) {
            // node found
            current.next = nextNode.next;
            current = null;
          } else {
            // node not found
            current = nextNode;
          }
        }
      }
    };
}
insertHighlights = (age) => {
    let current = this.head;
    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.next && current.next.age === currentAge) {
        current = current.next;
      } else {
        let highlight = prompt(`What was the highlight for age ${currentAge}?`);
        let newNode = new Node(currentAge, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
};

const hamza = new LinkedList(7, "I got shorts");
hamza.insertBeginning(3, "I walked");
hamza.insertBeginning(1, "I crawled");
hamza.traverse();

const age = prompt("How old are you?");
hamza.insertHighlights(age);
hamza.traverse();
