module.exports = {
	options: {
      // We'll minify by using cssmin later
      outputStyle: 'nested'
    },
	dist: {
		files: [
			// This one is in the critical path
			{ src: ['style/arjen.scss'], dest: '<%= dirs.output %>/style/arjen.css'},
			{ src: ['style/global.scss'], dest: '<%= dirs.output %>/style/global.css'},
			{ src: ['style/ninja.scss'], dest: '<%= dirs.output %>/style/ninja.css'},
			// This one isn't
        	//{src: ['src/aa1.js', 'src/aaa1.js'], dest: 'dest/a1.js'},
		]
	}
}