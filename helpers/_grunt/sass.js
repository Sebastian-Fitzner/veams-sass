module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dist: {
		files: {
			'<%= paths.dev %>/css/styles.css': '<%= paths.src %>/scss/styles.scss'
		}
	}
};