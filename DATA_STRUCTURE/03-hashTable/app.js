function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  let total = 0;
  for (i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  const index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value === value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  const index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    currentNode = this.buckets[index];

    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

HashTable.prototype.retrieveAll = function () {
  const allNodes = [];
  for (let i = 0; i < this.buckets; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};

const ht = new HashTable(30);

ht.insert("Dean", "dean@gmail.com");
ht.insert("Megan", "megan@gmail.com");
ht.insert("Dane", "dane@yahoo.com");

console.log(ht.buckets);
