/**
 * Created by ElenaM on 12.12.15.
 */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
          'app/bower_components/html5-boilerplate/dist/css/normalize.css',
          'app/bower_components/html5-boilerplate/dist/css/main.css',
          'app/bower_components/angular-material/angular-material.css',
          'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
          'app/app.css',
          'app/module-buttons/css/buttons.css',
          'app/module-inputs/css/inputs.css'
        ],
        dest: 'dist/style.css',
        options: {
        }
      },
      js_lib: {
        src: [
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/bower_components/angular-animate/angular-animate.js',
          'app/bower_components/angular-aria/angular-aria.js',
          'app/bower_components/angular-messages/angular-messages.js',
          'app/bower_components/angular-material/angular-material.js',
          'app/bower_components/angular-google-chart/ng-google-chart.js',
          'app/bower_components/material-design-icons/angular-material-icons.min.js',
          'app/components/version/version.js',
          'app/components/version/version-directive.js',
          'app/components/version/interpolate-filter.js',
          'app/components/charts/ng-google-chart.js'
        ],
        dest: 'dist/lib.js',
        options: {
          sourceMap: false
        }
      },
      js_src: {
        src: [
          'app/app.js',
          'app/index.js',
          'app/module-buttons/js/**',
          'app/module-charts/js/**',
          'app/module-icons/js/**',
          'app/module-inputs/js/**'
        ],
        dest: 'dist/src.js',
        options: {
          sourceMap: true,
          // Replace all 'use strict' statements in the code with a single one at the top
          banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        }
      }
    },

    cssmin: {
      css: {
        src: 'dist/style.css',
        dest: 'dist/style.min.css'
      }
    },

    uglify: {
      js: {
        files: {
          'dist/src.js': ['dist/src.js']
        }
      }
    },


    watch: {
      //dev: {
      //  files: [ 'Gruntfile.js', 'app/*.js', '*.html' ],
      //  tasks: [ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp' ],
      //  options: {
      //    atBegin: true
      //  }
      //},
      //min: {
      //  files: [ 'Gruntfile.js', 'app/*.js', '*.html' ],
      //  tasks: [ 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist' ],
      //  options: {
      //    atBegin: true
      //  }
      //},
      tasks: ['concat:css', 'concat:js_src']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 // grunt.loadNpmTasks('grunt-angular-templates');
  grunt.registerTask('default',
    ['concat:css',
      'concat:js_lib',
      'concat:js_src']);

  grunt.registerTask('prod',
    ['concat:css',
      'concat:js_lib',
      'concat:js_src',
      'uglify:js']);
};
