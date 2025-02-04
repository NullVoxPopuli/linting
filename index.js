// @ts-check
'use strict';

const { merge, pipe } = require('./configs/-utils');

module.exports = {
  merge,
  pipe,
  configs: {
    /**
     * @param {import('./configs/types').Options} [ options ]
     * @returns {import('eslint').Linter.Config}
     */
    ember(options = {}) {
      return require('./configs/ember').ember(options);
    },
    /**
     * @param {import('./configs/types').Options} [ options ]
     * @returns {import('eslint').Linter.Config}
     */
    crossPlatform(options = {}) {
      return require('./configs/cross-platform')(options);
    },
    /**
     * @param {import('./configs/types').Options} [ options ]
     * @returns {import('eslint').Linter.Config}
     */
    node(options = {}) {
      return require('./configs/node').node(options);
    },
    /**
     * @param {import('./configs/types').Options} [ options ]
     * @returns {import('eslint').Linter.Config}
     */
    nodeCJS(options = {}) {
      return require('./configs/node').nodeCJS(options);
    },
    /**
     * @param {import('./configs/types').Options} [ options ]
     * @returns {import('eslint').Linter.Config}
     */
    nodeESM(options = {}) {
      return require('./configs/node').nodeESM(options);
    },
  },
};
