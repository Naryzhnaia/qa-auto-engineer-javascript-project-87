export default function getDiffPlain(tree) {
  let difference = ''
  for (const key of tree) {
    switch (key.type) {
      case 'added':
        difference = `${difference}\nProperty '${key.key}' was added with value: ${key.value}`
        continue
      case 'updated':
        difference = `${difference}\nProperty '${key.key}' was updated. From ${key.value1} to ${key.value2}`
        continue
      case 'removed':
        difference = `${difference}\nProperty '${key.key}' was removed`
        continue
      case 'unchanged':
        continue
      default:
        throw new Error(`Unknown type: '${key.type}'`)
    }
  }
  return difference.trim()
}
