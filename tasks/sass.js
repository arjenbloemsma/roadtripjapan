module.exports = {
	options: {
      // We'll minify by using cssmin later
      outputStyle: 'nested'
    },
	build: {
		files: [
			{ src: ['style/arjen.scss'], dest: '<%= dirs.temp %>/style/arjen.css'},
			{ src: ['style/global.scss'], dest: '<%= dirs.temp %>/style/global.css'},
			{ src: ['style/ninja.scss'], dest: '<%= dirs.temp %>/style/ninja.css'},
		]
	}
}