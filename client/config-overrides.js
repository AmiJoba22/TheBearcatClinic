const { override } = require('customize-cra');

module.exports = override((config) => {
  // Add your custom Webpack changes here
  config.module.rules.push({
    test: /\.m?js/,
    type: 'javascript/auto',
  });
  return config;
});
