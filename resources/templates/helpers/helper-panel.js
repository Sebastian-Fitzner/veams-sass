/**
 * Represents a panel helper.
 *
 * @author Sebastian Fitzner
 */

var fs = require('fs');
var path = require('path');
var config = require('../../../helpers/config');

module.exports.register = function (Handlebars, options) {

	/*
	 * Panels helper.
	 *
	 * @return content with pre-defined markup in panel
	 */
	Handlebars.registerHelper('panel', function (name, options) {
		if ('string' !== typeof name) {
			options = name;
			name = 'default';
		}

		var filename = name + '.hbs';
		var filepath = path.join(process.cwd(), config.options.paths.panels, filename);

		var layout = fs.readFileSync(filepath).toString();
		var content = options.fn(this);
		var template = Handlebars.compile(layout);

		this.options = options.hash;
		this.yield = content;

		return template(this);
	});
};