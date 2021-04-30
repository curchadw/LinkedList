export default class LinkedList {
    constructor(headNode){
      this.head = headNode || null
      this.size = headNode ? 1 : 0
      this.tail = 'This is tail'
      this.next = null
    }

    size(){
     let count = 0
     let node = this.head
     while (node){
       count ++
       node = node.next
     }
    }

    clear(){
      this.head = null
    }

    append(arg){
      
      if (!this.head || !this.tail){
        this.head = new Node(arg)
        this.tail = new Node(arg)
      }
        this.tail.next = node
        this.tail = node
        this.size++
    }
}



//append(value)
    //create a new node
    //if no head or tail
      //head = the new node
      //tail = new node
    //else
      //connect new node to tail
      //reassign the tail
    //increament the size




//     class LinkedList {
//     constructor() {
//         this.size = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     // Add to the front of the linked list.
//     prepend(value) {
//         this.size += 1

//         // Create a new node
//         const node = Node(value, this.head)
//         this.head = node;

//         if (!this.tail) this.tail = node;
//         return this
//     }

//     append(value) {
//         // if there is no head or tail
//             // head = the new node
//             // tail = new node
//         //  else
//             // Create a new node with new value
//             // Connect new Node to tail
//             // Reassign the tail
//         // increase size by 1
//     }

//     fromArray() {}

//     toArray() {}

//     delete() {}

//     deleteHead() {}

//     deleteTail() {}

//     includes() {}

//     find() {}
// }
