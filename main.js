

class Node{
  constructor(el, next=null){
    this.el = el
    this.next = next
    // this.prev = null
    // this.prev = null //only if doubly linked list
  }
}



class LinkedList {
    constructor(head){
      this.head = head || null
      this.tail = null
      this.length = 0
     
    }


    clear(){
      this.head = null
    }

    print(){
      let output = JSON.stringify(this)
      return output
    }

    append(val){
      let node = new Node(val)
      
      if (!this.head || !this.tail){
       this.head = node
       this.tail = node
      //  this.size++
       this.length = 1
      }else{
        this.tail.next = node
        this.tail = node
        this.length++
      }
    }

    prepend(val){
      //create an element
      // const node = new Node(val)

      // if(!this.head || !this.tail){
      //   this.head = node
      //   this.tail = node
      //   this.size = 1
      // }
      // else{
      //   node.next = this.head
      //   this.head = node
      //   this.size++
      // }

      let next = this.head;

      this.head = new Node(val, next)
      this.length++

      return this.head 

    }
    // create a temp pointer that will iterate through the linked list
    //check value is equal
    //iterate the current to the current

    find(val){
      let current = this.head
      while(current !== null){
        //from node class (el)
         if(current.el === val){
          return true
        }
         current = current.next

      }
    
      return false

    
    }
    //current.next = current.next.next
    





    remove(index){
      //keep track of previous pointer
      let deletedNode;
      //deletes from the beginning
      if (index === 0){
        deletedNode = this.head
        let nextNode = deletedNode.next;
        this.head = nextNode
      }else if (index !== this.length -1){
        let current = this.head
        let count = 0

        while(count !== index -1){
          count++
          current = current.next
        }

        let prevNode = current
        deletedNode = prevNode.next
        let nextNode = deletedNode.next

        prevNode.next = nextNode
      }

      this.length--
      return deletedNode
     
    }
    reverse(head){
      //1. swap head and tail
      let node = this.head
      this.head = this.tail
      this.tail = node
      //2. write a for loop to lopp through each node in the list. THe old head is already stored as a variable called node. We will need to create teo other variables to keep strack of previous values and next value
      let prev = null;
      let next;

      for (let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node
        node = next
      }

      //4. finally we will shift the node value and previous value over by one. All we need to do is set previous to be node, and set node to be next. At the end of the loop, we will return to list by returning this.


      return this

    }
}






let train = new LinkedList()
train.append(1)
train.append(2)
train.append(3)
train.append(4)
// console.log(train.print())
train.prepend('New head')
// console.log(train.print())
// train.append(6)
// console.log(train.print())
// console.log(train.find(10))
// train.remove(2)
train.reverse()
console.log(train.print())






