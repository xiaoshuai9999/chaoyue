// 使用递归的方式实现数组、对象的深拷贝
export function deepCopy (obj) {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepCopy(obj[key])
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

// 数组去重
export function unique (arr, prop) {
  const res = new Map()
  return arr.filter((a) => !res.has(a[prop]) && res.set(a[prop], 1))
}
