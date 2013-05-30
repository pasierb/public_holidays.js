module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        options:
          bare: true
        files:
          "dist/public_holidays.core.js": "lib/public_holidays.core.coffee"
          "dist/public_holidays.pl.js": "lib/public_holidays.pl.coffee"
          "dist/public_holidays.at.js": "lib/public_holidays.at.coffee"
    jasmine:
      src: 'dist/*.pack.js'
      options:
        specs: 'spec/*.spec.js'
    concat:
      pack:
        src: [
          "vendor/date.js"
          "dist/public_holidays.core.js"
          "dist/public_holidays.pl.js"
          "dist/public_holidays.at.js"
        ]
        dest: "dist/public_holidays.pack.js"
    uglify:
      all:
        files:
          "dist/public_holidays.pack.min.js": "dist/public_holidays.pack.js"
          "dist/public_holidays.core.min.js": "dist/public_holidays.core.js"
          "dist/public_holidays.pl.min.js": "dist/public_holidays.pl.js"
          "dist/public_holidays.min.js": "dist/public_holidays.js"

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks 'grunt-contrib-jasmine'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-uglify'

  #Default task(s).
  grunt.registerTask 'default', ['coffee', 'concat', 'uglify', 'jasmine']
