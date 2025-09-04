import _ from 'lodash'

export default function getTreeDiff(data1, data2) {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const unsortedkeys = _.union(keys1, keys2)
  const keys = _.sortBy(unsortedkeys)
  let tree = []
  for (const key of keys) {
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        tree.push({ key: key, type: 'unchanged', value: data2[key] })
      }
      else {
        tree.push({ key: key, type: 'updated', value1: data1[key], value2: data2[key] })
      }
    }
    if (Object.hasOwn(data1, key) === false && Object.hasOwn(data2, key) === true) {
      tree.push({ key: key, type: 'added', value: data2[key] })
    }
    if (Object.hasOwn(data1, key) === true && Object.hasOwn(data2, key) === false) {
      tree.push({ key: key, type: 'removed', value: data1[key] })
    }
  }
  return tree
}
