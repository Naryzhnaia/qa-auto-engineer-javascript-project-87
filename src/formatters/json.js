import getObjectDiff from './getTreeDiff.js'

export default function getDiffJson(tree) {
  let difference = {}
  for (const property of tree) {
    if (property.status === 'unchanged' || property.status === 'added') {
      difference[property.key] = property.value
    }
    if (property.status === 'updated') {
      difference[property.key] = property.newValue
    }
  }
  return JSON.stringify(difference, null, 0)
}
