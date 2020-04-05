export const nameToDate = (name) => Date.parse(nameToYYYYMMDD(name))
export const nameToYYYYMMDD = (name) => name.split(`-`).slice(0, 3).join(`-`)
