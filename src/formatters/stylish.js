export default function getDiffStylish(tree) {
  let difference = ''
  for (const key of tree) {
    switch (key.type) {
      case 'added':
        difference = `${difference}\n  + ${key.key}: ${key.value}`
        continue
      case 'updated':
        difference = `${difference}\n  - ${key.key}: ${key.value1}`
        difference = `${difference}\n  + ${key.key}: ${key.value2}`
        continue
      case 'removed':
        difference = `${difference}\n  - ${key.key}: ${key.value}`
        continue
      case 'unchanged':
        difference = `${difference}\n    ${key.key}: ${key.value}`
        continue
      default:
        throw new Error(`Unknown type: '${key.type}'`)
    }
  }
  return `{${difference}\n}`
}
