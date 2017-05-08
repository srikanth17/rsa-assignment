/**
 * Created by srikanth on 06/05/2017.
 */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        concat: {
            css: {
                src: ['css/*.css'],
                dest: 'build/css/styles.css'
            },
            js: {
                src: ['js/*.js'],
                dest: 'build/js/scripts.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/style.css': 'main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'css/*.css',
                tasks: ['concat:css']
            },
            sass: {
                files: 'main.scss',
                tasks: ['sass']
            },

            js: {
                files: 'js/*.js',
                tasks: ['concat:js']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass', 'concat', 'watch']);

};
