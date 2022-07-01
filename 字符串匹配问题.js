// 字符串匹配问题

// 例子 const a = 'abcsawesdae' 模板字符串 saw
// 从给定字符串中找到模板字符串的位置，否则返回-1
// 那么模板字符串的索引为3

const testA = "bb321hbjhbchbjsdbh"

const template = "b"

// 方法一 朴素匹配算法

function findTemplateString(target, template) {
  // 双循环控制指针指向目标字符串和模板字符串
  let pointA = -1
  for (let i = 0; i <= target.length - 1; i++) {
    for (let j = 0; j <= template.length - 1; j++) {
      if (template[j] !== target[i]) {
        // 跳出循环
        break
      } else {
        //目标指针往后移动一位
        i++
      }
      if (j === template.length - 1) {
        pointA = i - 1
      }
    }
    if (pointA !== -1) {
      break
    }
  }
  return pointA
}

const index = findTemplateString(testA, template)

//KMP  寻找next数组
// 核心思想:在朴素算法中 有双指针，一个指向目标字符串为i,一个指向模板字符串为j
// 每次匹配不想等的时候 j都回溯到了最开始的位置重新匹配，这是不合理的
// 例如 google这个单词，如果目标字符串匹配到了l发现不相同，那么j可以不回溯到开头的位置
// 可以利用l之前的字符串一定是匹配的这个信息，发现l前面一定是g，那么目标指针就不用回溯到开头，可以直接回溯到o这个字母，开始匹配
// 所以类似于这种匹配，可以把模板字符串记录一个next数组，用来存放到哪一位匹配不上j指针应该回溯到那个位置，这样算法就会更简单一些
