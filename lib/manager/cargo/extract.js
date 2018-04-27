module.exports = {
  extractDependencies,
};

function extractDependencies(content) {
  logger.debug('cargo.extractDependencies()');
  logger.trace({ content });
  const deps = [];
  // Detect all dependencies within this Cargo.toml
  /*
    depType - use to differentiate different "types" within the same file
    depName - package name
    currentVersion - current version or range in the file
  */
  return deps;
}
