module.exports = {
	options: {
		pkg: 'package.json'
	},
	major: {
		options: {
			release: 'major'
		},
		src: [
			'package.json',
			'bower.json'
		]
	},
	minor: {
		options: {
			release: 'minor'
		},
		src: [
			'package.json',
			'bower.json'
		]
	},
	patch: {
		options: {
			release: 'patch'
		},
		src: [
			'package.json',
			'bower.json'
		]
	},
	prerelease: {
		options: {
			release: 'prerelease'
		},
		src: [
			'package.json',
			'bower.json'
		]
	}
};