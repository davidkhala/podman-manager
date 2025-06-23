export const contextsfmt = (list) => JSON.parse(list).map(({Name, URI, Default}) => ({Name, URI, Default}))
