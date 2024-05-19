function createUserProfiles(originalNames, modifiedNames) {
    if (!Array.isArray(originalNames) || !Array.isArray(modifiedNames)) {
        throw new Error('Both arguments must be arrays.');
    }
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('The arrays must be of the same length.');
    }

    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}
