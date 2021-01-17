class Node {
    constructor(color, number, next = null) {
      this.color = color;
      this.number = number;
      this.next = next;
    }
  
    getData = () => `${this.color} - ${this.number}`;

}
  
class Stack {
    constructor(limit = 20) {
      this.top = null;
      this.length = 0;
      this.limit = limit;
    }
  
    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () =>
    this.isEmpty() ? "No cards left in the deck" : this.top.getData();
  
    push = (color, number) => {
      if (this.isFull()) {
        console.log("The deck is full!");
      } else {
        const newNode = new Node(color, number, this.top);
        this.top = newNode;
        this.length++;
      }
    };
  
    pop = () => {
      if (this.isEmpty()) {
        console.log("The deck is empty!");
      } else {
        const popped = this.top;
        this.top = popped.next;
        this.length--;
        return popped.getData();
      }
    };
    

    
}
  
const colors = ["red", "blue", "green", "yellow"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  

const random = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
  

const fulldeck = ( array1 , array2) =>{
    const de= new Stack(20);
    while (de.length !== de.limit)
    de.push(random(array1),random(array2));
       
    return de;
}

const deck = fulldeck(colors ,numbers );

const player1= new Stack(5);
const player2= new Stack(5);

console.log('----------------------------');

console.log('player 1');

console.log('----------------------------');

while(player1.length !== player1.limit){
    
    console.log(deck.peek());
    player1.push(deck.pop());
}
console.log('----------------------------');

console.log('player 2');

console.log('----------------------------');
while(player2.length !== player2.limit){
    
    console.log(deck.peek());
    player2.push(deck.pop());
}


console.log('----------------------------');

console.log(`First card in deck: ${deck.peek()}`);



console.log(deck);



