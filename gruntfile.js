'use strict';

module.exports = function(grunt) { 	
	// Load tasks from the tasks folder
 	grunt.loadTasks('tasks');
	
	// Creat function to load the different option files
	// based on their names
	function loadConfig(path) {
		var glob = require('glob');
		var object = {};
		var key;
		
		glob.sync('*', {cwd: path}).forEach(function(option) {
			key = option.replace(/\.js$/,'');
			object[key] = require(path + option);
		});
		
		return object;
	}
	
	// CONFIG ===================================/
	// Initial config	
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		// custom template, so we don't have to repeat ourselves
		dirs: {
			output: 'wwwroot',
		},
		info: {
			banner: '<%= pkg.name %> v.<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>'
		}		
    }
	// Load all the tasks options in tasks/options base on the name:
	// watch.js => watch{}
	grunt.util._.extend(config, loadConfig('./tasks/'));
	grunt.initConfig(config);
	
	// DEPENDENT PLUGINS =========================/
	require('load-grunt-tasks')(grunt);
	
	// TASKS =====================================/
	// Default Task is basically a rebuild
	// ToDo; check imagemin for optimizing images
	grunt.registerTask('default', ['clean','typescript', 'concat', 'uglify', 'sass', 'autoprefixer', 'cssmin']);
};