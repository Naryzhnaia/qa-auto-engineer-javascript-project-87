import _ from 'lodash'

export default (object1, object2) => {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const unsortedProperties = _.union(propObject1, propObject2)
  const properties = _.sortBy(unsortedProperties)
  let difference = ''
  for (const property of properties) {
    if (object1.hasOwnProperty(property) && object2.hasOwnProperty(property)) {
      if (object1[property] !== object2[property]) {
        difference = `${difference}\nProperty '${property}' was updated. From ${object1[property]} to ${object2[property]}`
      }
    }
    if (object1.hasOwnProperty(property) === true && object2.hasOwnProperty(property) === false
    ) {
      difference = `${difference}\nProperty '${property}' was removed`
    }
    if (object1.hasOwnProperty(property) === false && object2.hasOwnProperty(property) === true
    ) {
      difference = `${difference}\nProperty '${property}' was added with value: ${object2[property]}`
    }
  }
  return `${difference.trim()}`
}
