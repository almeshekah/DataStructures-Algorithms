const prompt = require("prompt-sync")({ sigint: true });
class TreeNode {
    constructor(name) {
      this.name  = name;
      this.children = [];
    }
  
    addChild = (node) => {
        if(this.children.length<2){
          this.children.push(node);
          console.log(`${node.name}child  of ${this.name}`  )
        }else console.log("child is an orphan ")
    };

    getchildWithName = (name) =>{
        return this.children.forEach((child) => child.name ===name)};
    };

    removeChild = (node) => {
      this.children = this.children.filter((child) => child !== node);
    };

    
  
    traverse = () => {
      let nodes = [this];
      while (nodes.length > 0) {
        let current = nodes.pop();
        console.log(current.data);
        nodes = [...nodes, ...current.children];
      }
 };


function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
}
const root = new TreeNode("Family");
let fullName = prompt("enter child full name (done if finished)");

do{
  let current =root;
  let names = fullName.split(" ").reverse();
  let fristName = names.pop();
  let lastName = names.shift();

  if(lastName === current.name){
    if(names){
      names.forEach((name) => {
        let child = current.getchildWithName(name);
            if(child){
                current=child;
                }else{
                    let newNode =new TreeNode(name);
                    current.addChild(newNode);
                    current = newNode;
                }
              });
        }
        let newNode = new TreeNode (fristName);
        current.addChild(newNode);


    }
    console.log ("-------------------------------------------");
    fullName = prompt("enter child full name (done if finished)");


}while(fullName !== "done");






