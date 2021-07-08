import { ValidationHandlers } from '@theorylabs/noopbox-utils'


const {
  isTypeOfString,
  isLowerCaseString,
  isProjectNameString
} = ValidationHandlers


export const projectNameSpecialStringsList = [
  `-`,
  `noopbox`
]
export const projectNamePatternValidators = new Set([
  isTypeOfString,
  isLowerCaseString,
  isProjectNameString
])
