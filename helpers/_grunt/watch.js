module.exports = {
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
		files: [
			'<%= paths.src %>/js/**/*.js',
			'<%= paths.src %>/js/**/*.html'
		],
		tasks: 'js',
		options: {
			spawn: false
		}
	},
    ajax: {
        files: '<%= paths.src %>/ajax/**/*.{json,html}',
        tasks: 'sync:ajax'
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
	universal: {
		files: '<%= paths.src %>/scss/universal.scss',
		tasks: 'sass:universal'
	},
	templates: {
		files: ['<%= paths.src %>/{templates/data,templates/layouts,templates/partials}/**/{,*/}*.{md,hbs,json}'],
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