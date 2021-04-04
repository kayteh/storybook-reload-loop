module.exports = {
  stories: [
    "../stories-1/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories-2/**/*.stories.@(js|jsx|ts|tsx)",
    "../*.stories.mdx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
