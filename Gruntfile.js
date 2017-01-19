module.exports = function(grunt) {
	grunt.initConfig({
		eslint: {
			options: {
				configFile: ".eslintrc.js",
				ignorePath: ".eslintignore"
				// rulePaths: []
			},
			files: [
				'Gruntfile.js',
				'controllers/**/*.js',
				'test/**/*.js',
				'public/js/collections/*js',
				'public/js/models/*js',
				'public/js/views/*js'
			]
		},
		watch: {
			tasks: ['eslint'],
			files: [
				'Gruntfile.js',
				'controllers/**/*.js',
				'test/controllers/*.js',
				'public/js/collections/*js',
				'public/js/models/*js',
				'public/js/views/*js',
				'*.js'
			]
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['tests/controllers/**.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks("gruntify-eslint");
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('requireAPP', function(){
		require('./index.js');
	});
	grunt.registerTask("test", ['requireAPP', "mochaTest", "eslint"]);
	grunt.registerTask("default", ["test"]);
}
