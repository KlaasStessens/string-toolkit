function toSnakeCase(str) {
  return str                
    .toLowerCase()          
    .replace(/\s+/g, "_");  
}

module.exports = {
  toSnakeCase
};