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
      
      watch: {                                                         
            files: ['library/scss/**/*.scss'],
            tasks: ['sass', 'cssmin']     
      }
  });

  //Load Grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //Register the tasks
  grunt.registerTask('default', ['sass', 'cssmin']);


}