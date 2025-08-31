export default function getDiffStylish(tree) {
  let difference = ''
  for (const property of tree) {
    switch (property.status) {
      case 'added':
        difference = `${difference}\n  + ${property.key}: ${property.value}`
        continue
      case 'updated':
        difference = `${difference}\n  - ${property.key}: ${property.oldValue}`
        difference = `${difference}\n  + ${property.key}: ${property.newValue}`
        continue
      case 'removed':
        difference = `${difference}\n  - ${property.key}: ${property.oldValue}`
        continue
      case 'unchanged':
        difference = `${difference}\n    ${property.key}: ${property.value}`
        continue
      default:
        throw new Error(`Unknown status: '${property.status}'`)
    }
  }
  return `{${difference}\n}`
}
