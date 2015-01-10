module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dist: {
		files: {
			'<%= paths.dev %>/css/demo.css': '<%= paths.src %>/scss/demo.scss'
		}
	}
};