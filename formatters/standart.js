import _ from 'lodash'

export default (object1, object2) => {
  const propObject1 = Object.keys(object1)
  const propObject2 = Object.keys(object2)
  const properties = _.union(propObject1, propObject2)
  let difference = ''
  for (const property of properties) {
    if (object1.hasOwnProperty(property) && object2.hasOwnProperty(property)) {
      if (object1[property] === object2[property]) {
        difference = `${difference}\n   ${property} : ${object1[property]}`
      } else {
        difference = `${difference}\n - ${property} : ${object1[property]}`
        difference = `${difference}\n + ${property} : ${object2[property]}`
      }
    }
    if (object1.hasOwnProperty(property) === true && object2.hasOwnProperty(property) === false) {
      difference = `${difference}\n - ${property} : ${object1[property]}`
    }
    if (object1.hasOwnProperty(property) === false && object2.hasOwnProperty(property) === true) {
      difference = `${difference}\n + ${property} : ${object2[property]}`
    }
  }
  return `{${difference}\n}`
}
