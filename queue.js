class Node {
    constructor(groupSize , next = null) {
      this.groupSize = groupSize;
      this.next = next;
    }
}
  
class Queue {
    constructor(limit = 5) {
      this.front = null;
      this.back = null;
      this.length = 0;
      this.limit = limit;
    }
  
    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => (this.isEmpty() ? `Queue Underflow` : this.front.groupSize);
  
    enqueue = (groupSize) => {
      if (this.isFull()) {
        console.log("Queue Overflow");
      } else {
        const newNode = new Node(groupSize);
        if (this.isEmpty()) {
          this.front = newNode;
          this.back = newNode;
        } else {
          this.back.next = newNode;
          this.back = newNode;
        }
        this.length++;
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("Queue Underflow");
      } else {
        const removed = this.front;
        if (this.length === 1) {
          this.front = null;
          this.back = null;
        } else {
          this.front = removed.next;
        }
        this.length--;
        return removed.groupSize;
      }
    };
    traverse = () => {
        let current = this.front;
        let people = 0
        while (current) {
          people = people + current.groupSize;
          current = current.next;
        }
        return people; 
      };
}
  
const amusementpark = new Queue(6);


const addtogrop = (parson) =>{
   let people= parson; 
   
   
    while(people>12){
            amusementpark.enqueue(12);
            people=people-12
    }

    amusementpark.enqueue(people);
};


addtogrop(12);
addtogrop(25);




let time = amusementpark.traverse()*30 / 60 ;
console.log(`the time of waiting is ${time} minutes` );




















