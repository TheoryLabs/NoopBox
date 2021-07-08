import {
  ScopedNameStaticDefs
} from '../StaticPropDefinitions'


const {
  staticPropsList,
  propValidators
} = ScopedNameStaticDefs


export const scopedNameConstantPropsHandler = (strPatterns = staticPropsList, patternValidators = propValidators) => {
    let prefixCharStr = strPatterns[0].toString()
    let suffixCharStr = strPatterns[1].toString()
    let bodySubStr = strPatterns[2].toString().toLowerCase()

    let derivedProjectName = `${prefixCharStr}${bodySubStr}${suffixCharStr}`

    let validationHandlers = [...patternValidators]
    let validationChecks = { isString: null, isLowerCase: null, isScopedName: null }
    let validationCheckTests = { isString: null, isLowerCase: null, isScopedName: null }
    let validationResults = {}

    for (let [k,v] in Object.entries(validationChecks)) {
      if(v === null) {
        if(k === isString) {
          if(validationCheckTests.isString === null) {
            validationCheckTests.isString = validationHandlers[0](derivedScopedName)
            validationChecks.isString = false
          }
        }
        if(k === isLowerCase) {
          if(validationCheckTests.isLowerCase === null) {
            validationCheckTests.isLowerCase = validationHandlers[1](derivedScopedName)
            validationChecks.isLowerCase = false
          }
        }
        if(k === isScopedName) {
          if(validationCheckTests.isScopedName === null) {
            validationCheckTests.isScopedName = validationHandlers[2](derivedScopedName)
            validationChecks.isScopedName = false
          }
        }
      }
      if((validationChecks.isString === false) && (validationChecks.isLowerCase === false) && (validationChecks.isScopedName === false)) {
        if((validationCheckTests.isString !== null) && (validationCheckTests.isLowerCase !== null) && (validationCheckTests.isScopedName !== null)) {
          validationResults.isString = validationCheckTests.isString
          validationResults.isLowerCase = validationCheckTests.isLowerCase
          validationResults.isScopedName = validationCheckTests.isScopedName
        }
      }
    }

    let _props = {
      staticProps: { prefixCharStr, suffixCharStr, bodySubStr },
      dynamicProps: { derivedScopedName },
      ...validationResults
    }

    return { ..._props }
}
