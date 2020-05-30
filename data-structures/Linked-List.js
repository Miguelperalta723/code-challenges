class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    deleteFirst(){
      this.head = this.head.next
    }

    getLast(){
      let node = this.head

      while(node){
        if(node.next){
          node = node.next
        }else {
          return node
        }
      }
    }

    clear(){
      this.head = null
    }

    removeLast(){
      let prev = this.head
      let node = prev.next

      while(node){
        if(node.next){
          node = node.next
        }else {
          node = null
        }
      }
    }
}

const list = new LinkedList;
list.insertFirst(5)
list.insertFirst(10)
list.insertFirst(50000)
list.insertFirst(1)
// list.deleteFirst()
// list.deleteFirst()  
// list.clear()
list.removeLast()


console.log(list)
// console.log(list.head.next)
console.log(list.size())
console.log(list.getLast())
