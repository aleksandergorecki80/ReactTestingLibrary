export const addSpacesBeforeCapitalLetters = (colorName: string) => {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}