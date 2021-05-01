

class Node{
  constructor(el){
    this.el = el
    this.next = null
    // this.prev = null
    // this.prev = null //only if doubly linked list
  }
}



class LinkedList {
    constructor(head){
      this.head = head || null
      this.tail = null
      this.size = 0
     
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
       this.size = 1
      }else{
        this.tail.next = node
        this.tail = node
        this.size++
      }
    }

    prepend(val){
      //create an element
      const node = new Node(val)

      if(!this.head || !this.tail){
        this.head = node
        this.tail = node
        this.size = 1
      }
      else{
        node.next = this.head
        this.head = node
        this.size++
      }
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
    //current.next = curren.next.next
    remove(val,position = 0){
      let current = this.head
    
        if (position <= 0){
          current = this.head.next
        }else if (positon >= this.length -1){
          while(current.next.next != null){
            current = current.next
          }
          current.next = nul
        }else{
          let iter = 0;
          while(iter < position){
            current = current.next; iter++
          }
          current.next = current.next.next
        }
    }

    reverse(){}
}






let train = new LinkedList()
train.append(1)
train.append(2)
train.append(3)
train.append(4)
// console.log(train.print())
// train.prepend('New head')
// console.log(train.print())
// train.append(6)
// console.log(train.print())
// console.log(train.find(10))
train.remove(3)
console.log(train.print())



