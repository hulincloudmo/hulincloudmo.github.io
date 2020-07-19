
var preorderTraversal = function(root) {
  const res = []
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const n = stack.pop()
    res.push(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
  return res
};

var inorderTraversal = function(root) {
  const res = []
  const stack = []
  if (root) stack.push(root)
  let n = stack.pop()
  while (n !== null || stack.length !== 0) {
    if (n !== null) {
      stack.push(n)
      if (n.left) n = n.left else n = null
    } else {
      n = stack.pop()
      res.push(n.val)
      if (n.right) n = n.right else n = null
    }
  }
  return res
};
