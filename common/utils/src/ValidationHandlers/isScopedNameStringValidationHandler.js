// (Package.json Full Name Field String Regex): /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
export const isScopedNameStringValidationHandler = (val) => (/^(@[a-z0-9-~][a-z0-9-._~]*\/)/.test(val))
