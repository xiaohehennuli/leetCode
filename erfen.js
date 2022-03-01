/**
 *
 * 二分法
 * 查询有序数组
 *
 *
 */

//  给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

//  示例 1:

//  输入: nums = [-1,0,3,5,9,12], target = 9
//  输出: 4
//  解释: 9 出现在 nums 中并且下标为 4
//  示例 2:

//  输入: nums = [-1,0,3,5,9,12], target = 2
//  输出: -1
//  解释: 2 不存在 nums 中因此返回 -1

const arr = [-1, 0, 3, 5, 7, 8, 9]

function search(arr, target) {
  // 利用二分法不断缩小寻找空间，直到找到对应的target
  // 1.定义左区间和右区间
  let left = 0,
    right = arr.length - 1
  // 2.确定循环条件，当左区间临界和右区间临界相等时，或找到target时终止循环
  while (left <= right) {
    //3. 确定mid
    let mid = left + Math.floor((right - left) / 2)
    console.log("mid", mid)
    //如果数组中间的数小于target则去右边区间寻找
    if (arr[mid] < target) {
      left = mid + 1
    } else if (arr[mid] > target) {
      //如果数组中间的数大于target则去右边区间寻找
      right = mid - 1
    } else {
      //如果正好相等则返回mid
      return mid
    }
  }
  // 如果未找到则返回 -1
  return -1
}

console.log(search(arr, 3))
