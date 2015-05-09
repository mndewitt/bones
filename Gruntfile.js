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

      watch: {                                                         
            files: ['library/scss/**/*.scss'],
            tasks: ['sass']     
      }
  });

  //Load Grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Register the tasks
  grunt.registerTask('default', ['sass']);


}