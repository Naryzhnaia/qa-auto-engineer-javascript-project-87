import getObjectDiff from './getObjectDiff.js'

export default function getDiffPlain(object1, object2) {
  const properties = getObjectDiff(object1, object2)
  let difference = ''
  for (const property of properties) {
    switch (property.type) {
      case 'added':
        difference = `${difference}\nProperty '${property.key}' was added with value: ${object2[property.key]}`
        continue
      case 'updated':
        difference = `${difference}\nProperty '${property.key}' was updated. From ${object1[property.key]} to ${object2[property.key]}`
        continue
      case 'removed':
        difference = `${difference}\nProperty '${property.key}' was removed`
        continue
      case 'unchanged':
        continue
      default:
        throw new Error(`Unknown type: '${property.type}'`)
    }
  }
  return difference.trim()
}
