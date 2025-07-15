import _ from 'lodash'

export default function getObjectDiff(object1, object2) {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const unsortedProperties = _.union(propObject1, propObject2)
  const properties = _.sortBy(unsortedProperties)
  let result = []
  for (const property of properties) {
    if (Object.hasOwn(object1, property) && Object.hasOwn(object2, property)) {
      if (object1[property] === object2[property]) {
        result.push({ key: property, type: 'unchanged' })
      } 
      else {
        result.push({ key: property, type: 'updated' })
      }
    }
    if (Object.hasOwn(object1, property) === false && Object.hasOwn(object2, property) === true) {
      result.push({ key: property, type: 'added' })
    }
    if (Object.hasOwn(object1, property) === true && Object.hasOwn(object2, property) === false) {
      result.push({ key: property, type: 'removed' })
    }
  }
  return result
}
