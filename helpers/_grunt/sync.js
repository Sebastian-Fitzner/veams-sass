module.exports = {
	js: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/js',
				src: '**/*',
				dest: '<%= paths.dev %>/js'
			}
		]
	},
	ajax: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/ajax',
				src: '**/*.{json,html}',
				dest: '<%= paths.dev %>/ajax'
			}
		]
    },
	assets: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/assets',
				src: [
					'**/{,*/}*'
				],
				dest: '<%= paths.dev %>'
			}
		]
    },
    backbone: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower-components/backbone',
                src: 'backbone.js',
                dest: '<%= paths.dev %>/bower-components/backbone'
            }
        ]
    },
    underscore: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower-components/underscore',
                src: 'underscore.js',
                dest: '<%= paths.dev %>/bower-components/underscore'
            }
        ]
    },
    jquery: {
        files: [
            // includes files within path and its sub-directories
            {
                cwd: '<%= paths.src %>/bower-components/jquery/dist',
                src: 'jquery.js',
                dest: '<%= paths.dev %>/bower-components/jquery/dist'
            }
        ]
    }
};