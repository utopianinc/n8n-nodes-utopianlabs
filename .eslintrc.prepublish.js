/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	extends: './.eslintrc.js',

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/node-param-collection-type-unsorted-items': 'off',
				'n8n-nodes-base/node-param-options-type-unsorted-items': 'off',
				'n8n-nodes-base/node-dirname-against-convention': 'off',
			},
		},
	],
};
