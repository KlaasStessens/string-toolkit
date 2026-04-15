function toSnakeCase(str) {
  return str                
    .toLowerCase()          
    .replace(/\s+/g, "_");  
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, "-");
}

module.exports = {
  toSnakeCase,
  toKebabCase
};