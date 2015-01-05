/*
 * Generated on 2015-01-05
 * generator-prototype v0.4.73
 * http://prototype-generator.com/
 *
 * Copyright (c) 2015 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 * 4. When your project is a really huge one, you should consider to add broccoli.js to outsource some tasks (like scss compiling). 
 *
 */

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, { 
		cmq: 'grunt-combine-media-queries',
		replace: 'grunt-text-replace',
		'svg-sprites': 'grunt-dr-svg-sprites'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	var options = {
	// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: "helpers/_grunt/*.js"
		},
		// define your path structure
		paths: {
			// helpers folder with grunt tasks and styleguide templates, tests and photobox
			helper: 'helpers',
			// resources folder with working files
			src: 'resources',
			// dist folder
			dist: '_dist', 
			// dev/working folder
			dev: '_output'
		},
	// define your ports for grunt-contrib-connect
		ports: {
			app: 3000,
			test: 3001,
			livereload: 35731
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */
	
	// SASS Task
	grunt.registerTask('watchCSS', [
		'fileindex', // Sass Globbing with Grunt (see: http://www.prototype-generator.com/getting-started/features.html)
		'sass:dist'
	]); 
	
	// Icons Task
	grunt.registerTask('icons', [
		'grunticon',
		'clean:grunticon',
		'replace'
	]); 
	
	// Sprites Task
	grunt.registerTask('icons', [
		'svg-sprites',
		'replace:spriteUrl',
		'replace:spriteCleaner'
	]); 
	
	// Sync JS Task
	grunt.registerTask('syncJS', [
		'sync:js'
	]);
	
	// Build HTML Task
	grunt.registerTask('build-html', [
		'assemble'
	]);
	
	// HTML Hint Task (Check your HTML)
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// JS Hint Task (Check you JS)
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautifier Task (Beautify your JS files)
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);

	/*
	 *	ADVANCED TASKS
	 */
	grunt.registerTask('server', [
		'newer:assemble',
		'concurrent:syncing',
		'watchCSS',
		// 'connect:livereload',
		'browserSync', 
		'watch'
	]);
	
	grunt.registerTask('build', [
		'clean:dev',
		'jsbeautifier',
		'concurrent:syncing',  
		'watchCSS',
		'cmq',
		'dataSeparator',
		'cssmin',
		'concurrent:build',
		'check-js',
		'check-html'
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);
	
	grunt.registerTask('dist', [
		'clean',
		'version:prerelease',
		'build',
		'copy:dist'
	]); 
};