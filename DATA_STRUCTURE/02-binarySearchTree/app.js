function BST(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  const queue = [this];
  while (queue.length) {
    let treeNode = queue.shift();
    iteratorFunc(treeNode.value);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function () {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};
BST.prototype.getMaxVal = function () {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

function log(value) {
  console.log(value);
}

const bst = new BST(50);

bst.insert(30);
bst.insert(60);
bst.insert(80);
bst.insert(20);
bst.insert(10);
bst.insert(40);
bst.insert(40);
bst.insert(50);
bst.insert(90);

// bst.breadthFirstTraversal(log, "in-order");
console.log(bst.getMaxVal());
