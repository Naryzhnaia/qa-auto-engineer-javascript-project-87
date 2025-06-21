import _ from 'lodash'

export default (object1, object2) => {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const unsortedProperties = _.union(propObject1, propObject2)
  const properties = _.sortBy(unsortedProperties)
  let difference = ''
  for (const property of properties) {
    if (Object.hasOwn(object1, property) && Object.hasOwn(object2, property)) {
      if (object1[property] === object2[property]) {
        difference = `${difference}\n    ${property}: ${object1[property]}`
      } else {
        difference = `${difference}\n  - ${property}: ${object1[property]}`
        difference = `${difference}\n  + ${property}: ${object2[property]}`
      }
    }
    if (Object.hasOwn(object1, property) === true && Object.hasOwn(object2, property) === false) {
      difference = `${difference}\n  - ${property}: ${object1[property]}`
    }
    if (Object.hasOwn(object1, property) === false && Object.hasOwn(object2, property) === true) {
      difference = `${difference}\n  + ${property}: ${object2[property]}`
    }
  }
  return `{${difference}\n}`
}
