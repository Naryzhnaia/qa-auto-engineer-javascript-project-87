const formatJson = (tree) => {
  const jsonDiff = Object.fromEntries(
    tree
      .map((key) => {
        if (key.type === 'unchanged' || key.type === 'added') {
          return [key.key, key.value]
        }
        if (key.type === 'updated') {
          return [key.key, key.value2]
        }
      })
      .filter(Boolean)
  )
  return JSON.stringify(jsonDiff, null, 0)
}

export default formatJson
