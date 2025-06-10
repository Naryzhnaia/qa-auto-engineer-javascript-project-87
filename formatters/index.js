import getStandartDiff from './standart.js'
import getPlainDiff from './plain.js'

export default (filePath1, filePath2, format = 'standart') => {
if (format === 'standart') {
    return getStandartDiff(filePath1, filePath2)
} else if (format === 'plain') {
    return getPlainDiff(filePath1, filePath2)
} else {
    throw new Error(`Unknown format '${format}'`)
}
}
