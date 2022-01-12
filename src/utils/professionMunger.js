export default (str) => {
  if (!str.match(/Formerly:/) || !str.match(/Currently:/)) return str;

  const splitStr = str.split(/Formerly:|Currently:/);
  const newStrings = splitStr.filter((item) => item);

  return str[0] === 'F'
    ? `Currently: ${newStrings[1]} \n
      Formerly: ${newStrings[0]}`
    : `Formerly: ${newStrings[1]} \n
      Currently: ${newStrings[0]}`;
};
