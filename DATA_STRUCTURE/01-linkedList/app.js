function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

var ll = new LinkedList();

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  const val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  const val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

ll.addToHead("3");
ll.addToHead("2");
ll.addToTail(6);
ll.addToHead("1");
ll.addToTail(4);
ll.addToTail(6);
ll.addToTail(5);
ll.addToTail(6);

console.log(ll.removeHead());
console.log(ll.removeTail());

LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.tail;
  while (this.tail) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.prev;
  }
  return null;
};

console.log(ll.search(4));

LinkedList.prototype.indexOf = function (value) {
  const indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

console.log(ll.indexOf(6));
