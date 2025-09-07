import _ from 'lodash'

const getTreeDiff = (data1, data2) => {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const keys = _.sortBy(_.union(keys1, keys2))
  const tree = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { key: key, type: 'added', value: data2[key] }
    }
    if (!Object.hasOwn(data2, key)) {
      return { key: key, type: 'removed', value: data1[key] }
    }
    if (data1[key] === data2[key]) {
      return { key: key, type: 'unchanged', value: data2[key] }
    }
    else {
      return { key: key, type: 'updated', value1: data1[key], value2: data2[key] }
    }
  })
  return tree
}

export default getTreeDiff
