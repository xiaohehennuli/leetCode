// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

const data = [1, 2, 3, 4, 5, 6, 7]

// 思路从数组的后面开始截取k步
// 从数组后前面开始截取k到末尾
// contack 连接
// 用空间换时间

function rotateArray(arr, k) {
  if (arr.length === 0 || !k) {
    return
  }
  const step = Math.abs(k % arr.length)
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, arr.length - step)
  return part1.concat(part2)
}

const test = rotateArray(data, 3)

console.log("test", test)
