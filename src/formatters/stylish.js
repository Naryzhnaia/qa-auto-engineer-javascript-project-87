const formatStylish = (tree) => {
  const stylishDiff = tree.map((key) => {
    switch (key.type) {
      case 'added':
        return `  + ${key.key}: ${key.value}`
      case 'updated':
        return `  - ${key.key}: ${key.value1}\n  + ${key.key}: ${key.value2}`
      case 'removed':
        return `  - ${key.key}: ${key.value}`
      case 'unchanged':
        return `    ${key.key}: ${key.value}`
      default:
        throw new Error(`Unknown type: '${key.type}'`)
    }
  })
  return `{\n${stylishDiff.join('\n')}\n}`
}

export default formatStylish
