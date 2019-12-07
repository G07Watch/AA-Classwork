// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let median = nums[mid]

  let node = new TreeNode(median)

  let leftSort = nums.slice(0, mid)
  let rightSort = nums.slice(mid + 1)

  let leftSubTree = sortedArrayToBST(leftSort)
  let rightSubTree = sortedArrayToBST(rightSort)

  node.left = leftSubTree;
  node.right = rightSubTree;

  return node;
}