const getSpacedCamelCase = ({ string = '' }) =>
  string.replace(/([a-z])([A-Z])/g, '$1 $2');

export default getSpacedCamelCase;
