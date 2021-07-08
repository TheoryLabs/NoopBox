import { isTypeOfStringValidationHandler } from './isTypeOfStringValidationHandler'
import { isLowerCaseStringValidationHandler } from './isLowerCaseStringValidationHandler'
import { isScopedNameStringValidationHandler } from './isScopedNameStringValidationHandler'
import { isProjectNameStringValidationHandler } from './isProjectNameStringValidationHandler'


const ValidationHandlers = {
  isTypeOfString: isTypeOfStringValidationHandler,
  isLowerCaseString: isLowerCaseStringValidationHandler,
  isScopedNameString: isScopedNameStringValidationHandler,
  isProjectNameString: isProjectNameStringValidationHandler
}


export {
  ValidationHandlers
}
