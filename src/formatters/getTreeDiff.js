import _ from 'lodash'

export default function getTreeDiff(data1, data2) {
  const propObject1 = Object.keys(data1)
  const propObject2 = Object.keys(data2)
  const unsortedProperties = _.union(propObject1, propObject2)
  const properties = _.sortBy(unsortedProperties)
  let tree = []
  for (const property of properties) {
    if (Object.hasOwn(data1, property) && Object.hasOwn(data2, property)) {
      if (data1[property] === data2[property]) {
        tree.push({ key: property, status: 'unchanged', value: data2[property] })
      }
      else {
        tree.push({ key: property, status: 'updated', oldValue: data1[property], newValue: data2[property] })
      }
    }
    if (Object.hasOwn(data1, property) === false && Object.hasOwn(data2, property) === true) {
      tree.push({ key: property, status: 'added', value: data2[property] })
    }
    if (Object.hasOwn(data1, property) === true && Object.hasOwn(data2, property) === false) {
      tree.push({ key: property, status: 'removed', oldValue: data1[property] })
    }
  }
  return tree
}
