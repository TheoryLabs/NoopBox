import {
  scopedNameSpecialStringsList,
  scopedNamePatternValidators
} from './scopedNamePropDefs'

import {
  projectNameSpecialStringsList,
  projectNamePatternValidators
} from './projectNamePropDefs'


const ScopedNameStaticDefs = {
  staticPropsList: scopedNameSpecialStringsList,
  propValidators: scopedNamePatternValidators
}
const ProjectNameStaticDefs = {
  staticPropsList: projectNameSpecialStringsList,
  propValidators: projectNamePatternValidators
}


export {
  ScopedNameStaticDefs,
  ProjectNameStaticDefs
}
