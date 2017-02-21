module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      bower: {
        expand: true,
        cwd: 'bower_components/',
        src: [
          'angular/angular.min.js',
          'angular-sanitize/angular-sanitize.min.js',
          'videogular/videogular.js',
          'videogular-controls/vg-controls.js',
          'videogular-overlay-play/vg-overlay-play.js',
          'videogular-poster/vg-poster.js',
          'videogular-themes-default/videogular.min.css'
        ],
        dest: './app/bower_components'
      }
    },
    connect: {
      server: {
        options: {
          base: './app',
          host: 'localhost',
          port: 8001,
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      app: {
        files: './app/**/*',
        tasks: ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['copy:bower', 'connect:server', 'watch']);
};
