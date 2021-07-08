import {
  ProjectNameStaticDefs
} from '../StaticPropDefinitions'


const {
  staticPropsList,
  propValidators
} = ProjectNameStaticDefs


export const projectNameConstantPropsHandler = (strPatterns = staticPropsList, patternValidators = propValidators) => {
    let prefixCharStr = strPatterns[0].toString()
    let suffixCharStr = strPatterns[1].toString()
    let bodySubStr = strPatterns[2].toString().toLowerCase()

    let derivedScopedName = `${prefixCharStr}${bodySubStr}${suffixCharStr}`

    let validationHandlers = [...patternValidators]
    let validationChecks = { isString: null, isLowerCase: null, isProjectName: null }
    let validationCheckTests = { isString: null, isLowerCase: null, isProjectName: null }
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
        if(k === isProjectName) {
          if(validationCheckTests.isProjectName === null) {
            validationCheckTests.isProjectName = validationHandlers[2](derivedScopedName)
            validationChecks.isProjectName = false
          }
        }
      }
      if((validationChecks.isString === false) && (validationChecks.isLowerCase === false) && (validationChecks.isProjectName === false)) {
        if((validationCheckTests.isString !== null) && (validationCheckTests.isLowerCase !== null) && (validationCheckTests.isProjectName !== null)) {
          validationResults.isString = validationCheckTests.isString
          validationResults.isLowerCase = validationCheckTests.isLowerCase
          validationResults.isProjectName = validationCheckTests.isProjectName
        }
      }
    }

    let _props = {
      staticProps: { prefixCharStr, suffixCharStr, bodySubStr },
      dynamicProps: { derivedProjectName },
      ...validationResults
    }

    return { ..._props }
}
