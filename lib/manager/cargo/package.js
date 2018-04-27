module.exports = {
  getPackageUpdates,
};

async function getPackageUpdates(config) {
  const { depName, currentVersion } = config;
  logger.debug({ depName }, 'cargo.getPackageUpdates()');
  // TODO look up updates here
  return [];
}
