import getObjectDiff from './getObjectDiff.js'

export default function getDiffJson(object1, object2) {
  const properties = getObjectDiff(object1, object2)
  let difference = {}
  for (const property of properties) {
    if (property.type === 'unchanged' || property.type === 'added' || property.type === 'updated') {
      difference[property.key] = object2[property.key]
    }
  }
  return JSON.stringify(difference, null, 0)
}
