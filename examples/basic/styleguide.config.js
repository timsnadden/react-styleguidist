const loaders = require('loaders');
module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	theme: {
		base: 'pink',
		font: 'Papyrus',
	},
	webpackConfig: {
		module: {
			loaders: loaders.all,
		},
	},
};
