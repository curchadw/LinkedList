import './Node'
import './LinkedList'


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.next = node2
node2.next = node3

console.log(node1)
