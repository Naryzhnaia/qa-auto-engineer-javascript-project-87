import getObjectDiff from './getObjectDiff.js'

export default function getDiffStylish(object1, object2) {
  const properties = getObjectDiff(object1, object2)
  let difference = ''
  for (const property of properties) {
    switch (property.type) {
      case 'added':
        difference = `${difference}\n  + ${property.key}: ${object2[property.key]}`
        continue
      case 'updated':
        difference = `${difference}\n  - ${property.key}: ${object1[property.key]}`
        difference = `${difference}\n  + ${property.key}: ${object2[property.key]}`
        continue
      case 'removed':
        difference = `${difference}\n  - ${property.key}: ${object1[property.key]}`
        continue
      case 'unchanged':
        difference = `${difference}\n    ${property.key}: ${object1[property.key]}`
        continue
      default:
        throw new Error(`Unknown type: '${property.type}'`)
    }
  }
  return `{${difference}\n}`
}
