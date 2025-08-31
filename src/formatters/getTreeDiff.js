import _ from 'lodash'

export default function getTreeDiff(object1, object2) {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const unsortedProperties = _.union(propObject1, propObject2)
  const properties = _.sortBy(unsortedProperties)
  let tree = []
  for (const property of properties) {
    if (Object.hasOwn(object1, property) && Object.hasOwn(object2, property)) {
      if (object1[property] === object2[property]) {
        tree.push({ key: property, status: 'unchanged', value: object2[property] })
      }
      else {
        tree.push({ key: property, status: 'updated', oldValue: object1[property], newValue: object2[property] })
      }
    }
    if (Object.hasOwn(object1, property) === false && Object.hasOwn(object2, property) === true) {
      tree.push({ key: property, status: 'added', value: object2[property] })
    }
    if (Object.hasOwn(object1, property) === true && Object.hasOwn(object2, property) === false) {
      tree.push({ key: property, status: 'removed', oldValue: object1[property] })
    }
  }
  return tree
}
