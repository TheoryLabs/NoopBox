import {
  ScopedNameDefinitions,
  ProjectNameDefinitions
} from '../PropSchemaHandlers'


const LibConstants = {
  globalConstants: {
    namingConventionsList: new Map([
      [
        `nameFieldPatterns`, {
          scopeNameProps: ScopedNameDefinitions(),
          projectNameProps: ProjectNameDefinitions()
        }
      ]
    ]),
    specialDefinitionsList: new Map([
      [
        `manifestFile`, [
          `package.json`
        ]
      ],
      [
        `initFields`, [
          `name`,
          `version`,
          `private`,
          `license`,
          `main`,
          `module`,
          `workspaces`,
          `config`
        ]
      ]
    ])
  }
}


export {
  LibConstants
}
