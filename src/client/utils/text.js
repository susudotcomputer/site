export const camelToSentence = str => {
  const spaced = str.replace(/([A-Z])/g, " $1").toLowerCase();
  return spaced[0].toUpperCase() + spaced.slice(1);
};
