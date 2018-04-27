const { extractDependencies } = require('./extract');
const { getPackageUpdates } = require('./package');
const { updateDependency } = require('./update');

const filePattern = new RegExp('(^|/)Cargo.toml$');

module.exports = {
  extractDependencies,
  filePattern,
  getPackageUpdates,
  updateDependency,
};
