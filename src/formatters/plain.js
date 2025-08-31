import getObjectDiff from './getTreeDiff.js'

export default function getDiffPlain(tree) {
  let difference = ''
  for (const property of tree) {
    switch (property.status) {
      case 'added':
        difference = `${difference}\nProperty '${property.key}' was added with value: ${property.value}`
        continue
      case 'updated':
        difference = `${difference}\nProperty '${property.key}' was updated. From ${property.oldValue} to ${property.newValue}`
        continue
      case 'removed':
        difference = `${difference}\nProperty '${property.key}' was removed`
        continue
      case 'unchanged':
        continue
      default:
        throw new Error(`Unknown status: '${property.status}'`)
    }
  }
  return difference.trim()
}
