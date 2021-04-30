

class Node{
  constructor(el){
    this.el = el
    this.next = null
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

    append(val){
      let node = new Node(val)
      
      if (!this.head || !this.tail){
       this.head = node
       this.tail = node
      //  this.size++
      }else{
        this.tail.next = node
        this.tail = node
        this.size++
      }
    }
}




let train = new LinkedList()
train.append(1)
train.append(2)
train.append(3)
train.append(4)
console.log(train)



