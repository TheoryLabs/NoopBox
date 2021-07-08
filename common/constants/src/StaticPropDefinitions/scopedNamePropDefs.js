import { ValidationHandlers } from '@theorylabs/noopbox-utils'


const {
  isTypeOfString,
  isLowerCaseString,
  isScopedNameString
} = ValidationHandlers


export const scopedNameSpecialStringsList = [
  `@`,
  `/`,
  `theorylabs`
]
export const scopedNamePatternValidators = new Set([
  isTypeOfString,
  isLowerCaseString,
  isScopedNameString
])
