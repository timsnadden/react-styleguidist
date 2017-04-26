const loaders = require('loaders');
module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	theme: {
		base: 'pink',
	},
	webpackConfig: {
		module: {
			loaders: loaders.all,
		},
	},
};
