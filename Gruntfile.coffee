module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        options:
          bare: true
        files:
          "dist/public_holidays.js": ["lib/*.coffee"]
    jasmine:
      src: 'dist/*.pack.js'
      options:
        specs: 'spec/*.spec.js'
    concat:
      pack:
        src: ["vendor/date.js", "dist/public_holidays.js"]
        dest: "dist/public_holidays.pack.js"

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks 'grunt-contrib-jasmine'
    grunt.loadNpmTasks 'grunt-contrib-concat'

  #Default task(s).
  grunt.registerTask 'default', ['coffee', 'concat', 'jasmine']
