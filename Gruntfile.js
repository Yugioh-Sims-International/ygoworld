module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	var files = ['*.js', 'lib/**/*.js', 'public/js/*.js', 'public/js/ate/*.js'];

	grunt.initConfig({

		jshint: {
			options: {
				jshintrc: true
			},
			files: files
		},

		concat: {
			js: {
				files: {
					'public/build/js/main.js': [
						'public/js/ate/globals.js',
						'public/js/ate/client.js',
						'public/js/ate/socket.js',
						'public/js/gameDomEvents.js',
						'public/js/cardImg.js',
						'public/js/Game.js',
						'public/js/data/db.js',
						'public/js/data/card.js'
					]
				}
			},
			css: {
				files: {
					'public/build/css/main.css': [
						'public/css/normalize.css',
						'public/css/chat.css',
						'public/css/game.css'
					]
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'public/build/js/main.min.js': ['public/build/js/main.js']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'public/build/css/main.min.css': ['public/build/css/main.css']
				}
			}
		},

		watch: {
			sass: {
				files: files.concat(['public/css/*.css']),
				tasks: ['build']
			}
		}

	});

	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);

	grunt.registerTask('iteration', ['watch']);

	grunt.registerTask('default', ['jshint', 'watch']);

};
