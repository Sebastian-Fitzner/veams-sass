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

	pgReset: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg-reset.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'global/_reset.scss',
					'global/_font-base.scss',
					'global/_settings.scss'
				]
			}
		]
	},
	pgNormalize: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg-normalize.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'global/_normalize.scss',
					'global/_font-base.scss',
					'global/_settings.scss'
				]
			}
		]
	},
	pgHelper: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg-helpers.scss',
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
	pgAnimation: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg-animations.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'keyframes/**/*.scss',
					'animations/**/*.scss'
				]
			}
		]
	},
	pg: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'_pg-helpers.scss',
					'effects/**/*.scss',
					'css3/**/*.scss',
					'general-extends/**/*.scss'
				]
			}
		]
	},
	demo: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/demo.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'demo/global/_vars.scss',
					'_pg-reset.scss',
					'_pg.scss',
					'_pg-animations.scss',
					'demo/global/_demo.scss',
					'demo/effects/**/*.scss',
					'demo/regions/**/*.scss',
					'demo/modules/**/*.scss',
					'demo/components/**/*.scss',
					'demo/blocks/**/*.scss'
				]
			}
		]
	}
};