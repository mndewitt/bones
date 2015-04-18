module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
      sass: {                                  
        dist: {                                  
          files: [{
            expand: true,
            cwd: 'library/scss',
            src: ['*.scss'],
            dest: 'library/css',
            ext: '.css'
          }]
        }
      },
      
      cssmin: {
        target: {
          files: {
            'library/css/style.min.css': ['library/css/style.css']
          }
        }
      },

      uglify: {
        my_target: {
          files: {
            'library/js/scripts.min.js': ['library/js/scripts.js']
          }
        }
      },

      watch: {                                                         
            files: ['library/scss/**/*.scss', 'library/js/scripts.js'],
            tasks: ['sass', 'cssmin', 'uglify']     
      }
  });

  //Load Grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Register the tasks
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);


}