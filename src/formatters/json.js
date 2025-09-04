export default function getDiffJson(tree) {
  let difference = {}
  for (const key of tree) {
    if (key.type === 'unchanged' || key.type === 'added') {
      difference[key.key] = key.value
    }
    if (key.type === 'updated') {
      difference[key.key] = key.value2
    }
  }
  return JSON.stringify(difference, null, 0)
}
