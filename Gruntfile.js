'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: '',
          keepalive: true
        }
      }
    }
  });
  grunt.registerTask('server', function() {grunt.task.run('connect');});
};