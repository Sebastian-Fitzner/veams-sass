module.exports = {
	options: {
		format: function (list, options, dest) {
			// just the index value
			var i = 0;
			// empty array which get be filled with our sass imports
			var imports = [];

			// loop to go through the items of array and build our pattern
			for (i; i < list.length; i++) {
				// single list element
				var listEl = list[i];
				// clean up our list element to get only the path and filename
				var listElName = listEl.replace(/_([^_]*)$/, "" + '$1').replace(/\.scss|\.sass/gi, "");
				// concatenate our cleaned up item with '@import ""' and add it to our imports array
				imports += '@import "' + listElName + '";\n';
			}

			// return the imports array
			return imports;
		}
	},

	veamsReset: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_veams-reset.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'browser-resets/_reset.scss',
					'global/_font-base.scss',
					'global/_settings.scss'
				]
			}
		]
	},
	veamsNormalize: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_veams-normalize.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'browser-resets/_normalize.scss',
					'global/_font-base.scss',
					'global/_settings.scss'
				]
			}
		]
	},
	veamsHelper: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_veams-helpers.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'_helpers/**/*.scss',
					'layout/**/*.scss'
				]
			}
		]
	},
	veamsAnimation: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_veams-animations.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'keyframes/**/*.scss',
					'animations/feedback-effects/_fb-ani-setup.scss',
					'animations/**/*.scss'
				]
			}
		]
	},
	veams: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_veams.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'_veams-helpers.scss',
					'browser-resets/_buttons.scss',
					'effects/**/*.scss',
					'css3/**/*.scss'
				]
			}
		]
	}
};