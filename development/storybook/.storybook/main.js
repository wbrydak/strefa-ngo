const path = require('path');

const addModulesToTranspile = (config, absolutePath) => {
  config.module.rules[config.module.rules.length - 1].oneOf[2].include.push(
    path.resolve(__dirname, '../../..', absolutePath),
  );
};

module.exports = {
  stories: ['../src/stories/*.stories.mdx', '../src/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    addModulesToTranspile(config, 'shared/ui-kit');

    return config;
  },
};
