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

	pg: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_pg.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'global/_reset.scss',
					'utils/_system.scss',
					'utils/mixins/**/*.scss',
					'utils/extends/**/*.scss',
					'global/_font-base.scss'
				]
			}
		]
	},
	demo: {
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/styles.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'global/_vars.scss',
					'_pg.scss',
					'global/_demo.scss',
					'icons/**/*.scss',
					'regions/**/*.scss',
					'modules/**/*.scss',
					'components/**/*.scss',
					'blocks/**/*.scss'
				]
			}
		]
	}
};