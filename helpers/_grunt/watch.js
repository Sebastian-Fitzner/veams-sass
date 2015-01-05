module.exports = {
	configFiles: {
		options: {
			reload: true
		},
		files: [
			'<%= paths.helper %>/_grunt/*.js',
			'Gruntfile.js'
		]
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files: [
			'<%= paths.dev %>/{,*/}*.html',
			'<%= paths.dev %>/css/{,*/}*.css',
			'<%= paths.dev %>/js/{,*/}*.js',
			'<%= paths.dev %>/img/**/*.{jpg,png}'
		]
	},
    js: {
        files: '<%= paths.src %>/js/{,*/}*.js',
        tasks: 'sync:js'
    },
    ajax: {
        files: '<%= paths.src %>/ajax/**/*.{json,html}',
        tasks: 'sync:assets'
    },
    assets: {
        files: [
			'<%= paths.src %>/assets/**/*'
			],
        tasks: 'sync:assets'
    },
	globbing: {
		options: {
		event: ['added', 'deleted']
		},
		files: [
			'<%= paths.helper %>/_grunt/fileindex.js',
			'<%= paths.src %>/scss/**/*.scss',
			'!<%= paths.src %>/scss/_all.scss'
		],
		tasks: 'fileindex:libsassGlobbing'
	},
	fileindex: {
		files: [
			'<%= paths.helper %>/_grunt/fileindex.js'
		],
		tasks: 'fileindex:libsassGlobbing'
	},
	scss: {
		files: '<%= paths.src %>/scss/**/*',
		tasks: 'sass:dist',
	    options: {
			spawn: false
		}
	},
	templates: {
		files: ['<%= paths.src %>/{data,templates/layouts,templates/partials}/**/{,*/}*.{md,hbs,yml,json}'],
	    tasks: ['newer:assemble'],
	    options: {
			spawn: false
		}
	},
    pages: {
        files: ['<%= paths.src %>/templates/pages/**/{,*/}*.hbs'],
        tasks: ['newer:assemble:pages'],
	    options: {
			spawn: false
		}
    }
};