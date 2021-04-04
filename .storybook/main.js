module.exports = {
  stories: [
    "../stories-1/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories-2/**/*.stories.@(js|jsx|ts|tsx)",
    "../Intro.stories.mdx", // XXX: Comment this to fix reload loop. Repros with *.stories.mdx too.
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
