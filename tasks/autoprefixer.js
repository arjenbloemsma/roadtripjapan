module.exports = {
	options: {
		browsers: ['last 2 version']
	},
	multiple_files: {
		expand: true,
		flatten: true,
		src: '<%= dirs.output %>/style/global.css',
		dest: '<%= dirs.output %>/style/global.p.css'
	}
}