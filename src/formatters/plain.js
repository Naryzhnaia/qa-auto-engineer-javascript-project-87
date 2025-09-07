const formatPlain = (tree) => {
  const plainDiff = tree.map((key) => {
    switch (key.type) {
      case 'added':
        return `\nProperty '${key.key}' was added with value: ${key.value}`
      case 'updated':
        return `\nProperty '${key.key}' was updated. From ${key.value1} to ${key.value2}`
      case 'removed':
        return `\nProperty '${key.key}' was removed`
      case 'unchanged':
        return
      default:
        throw new Error(`Unknown type: '${key.type}'`)
    }
  })
  return plainDiff.join('').trim()
}

export default formatPlain
