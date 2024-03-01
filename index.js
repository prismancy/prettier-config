/** @type {import('prettier').Options} */
module.exports = {
	useTabs: true,
	quoteProps: "consistent",
	arrowParens: "avoid",
	plugins: [require("prettier-plugin-svelte")],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
				useTabs: false,
			},
		},
	],
};
