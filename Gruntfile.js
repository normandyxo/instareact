
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      react: {
        files: 'app/**/*.jsx',
        tasks: ['browserify']
      }
    },

    browserify: {
      
      dist: {
        options: {
          transform: [ require('grunt-react').browserify ]
        },
        files: [
          {
            expand: true,
            cwd: 'app/pages',
            src: ['*.jsx'],
            dest: 'public/javascripts/dist',
            ext: '.built.js'
          }
        ]
      }

    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default','build',[
    'browserify:dist'
  ]);
  
};