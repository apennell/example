const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './src/components/**/[A-Z]*.jsx',
	styleguideComponents: {
		StyleGuideRenderer: path.join(__dirname, 'styleguide/StyleguideWrapper'),
		// Wraps each example component with Provider to apply branded styled-components/theme
		Wrapper: path.join(__dirname, 'styleguide/ThemedWrapper.jsx'),
		Preview: path.join(__dirname, 'styleguide/PreviewWrapper.jsx')
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
};
