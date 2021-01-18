const prompt = require("prompt-sync")({ sigint: true });
class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    addChild = (node) => {
        if(this.children.length<=2)
      this.children.push(node);
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
}
function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
}
let name = prompt("enter child full name (done if finished)");
do{
let name = prompt("enter child full name (done if finished)");
if(countWords(name)===2){
    const family1 = new TreeNode(name);
}else if (countWords(name)===3){
    let ver =new TreeNode(name.split(" ", 1));
    let bad = name.split(" ", 2);
    bad.addChild(ver);
}else if (countWords(name)===4){
    let ver =new TreeNode(name.split(" ", 3));
    let bad = name.split(" ", 2);
    bad.addChild(ver);

}


}while(countWords(name)===1);

console.log(family1); 



