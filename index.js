/** @type {import('prettier').Options} */
module.exports = {
  experimentalTernaries: true,
  quoteProps: "consistent",
  arrowParens: "avoid",
  plugins: ["prettier-plugin-svelte"],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
